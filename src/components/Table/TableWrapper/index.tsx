import { Table } from "antd";
import viVN from "antd/es/locale/vi_VN"; // Import ngôn ngữ tiếng Việt
import { Fragment } from "react";
import { TableWrapperProps } from "./TableWrapper.interface";

const TableWrapper = ({
  hiddenRowSelection,
  columns,
  data,
  scroll,
  setSelectedRowKeys,
  selectedRowKeys,
  setItemTarget,
  itemTarget,
  getCheckboxProps,
  style,
  onChange,
  classNames,
}: TableWrapperProps) => {
  //! state

  //! function
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys && setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: getCheckboxProps,
  };

  const rowClassName = (record: any) => {
    if (record?.id) {
      if (itemTarget?.id === record.id) {
        return "ant-table-row-selected";
      }
    }
    if (record?.idRoot) {
      if (itemTarget?.idRoot === record.idRoot) {
        return "ant-table-row-selected";
      }
    }
    return "";
  };
  const customScrollStyle = {
    // Tùy chỉnh style của thanh cuộn ngang
    scrollbarWidth: "thin",
    scrollbarColor: "#888 #f1f1f1",
    overflowX: "auto",
  };
  //! render
  return (
    <Fragment>
      <div className="custom-scrollbar custom-scrollbar-horizontal">
        <Table
          columns={columns}
          bordered
          dataSource={data}
          pagination={false}
          rowSelection={hiddenRowSelection ? undefined : rowSelection}
          locale={viVN.Table}
          scroll={scroll}
          onChange={onChange}
          onRow={(record) => ({
            onClick: () => {
              if (record.id) {
                setItemTarget && setItemTarget(record);
                if (!selectedRowKeys?.includes(record.id)) {
                  setSelectedRowKeys &&
                    setSelectedRowKeys((prev: any) => {
                      return [...prev, record?.id];
                    });
                } else {
                  const result = selectedRowKeys.filter(
                    (item) => item !== record.id
                  );
                  setSelectedRowKeys && setSelectedRowKeys(result);
                }
              }
            },
          })}
          rowClassName={rowClassName}
          style={style}
          className={`antd-table-body ${classNames}`}
        />
      </div>
    </Fragment>
  );
};

export default TableWrapper;
