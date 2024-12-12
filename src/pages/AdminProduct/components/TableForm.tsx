import { Fragment, useContext } from "react";
import { FileContext } from "..";
import { Formik } from "formik";
import { Table, Tooltip } from "antd";
import TableWrapper from "components/Table/TableWrapper";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function TableForm() {
  const {
    itemTarget,
    actions,
    dataTable,
    setItemTarget,
    paramsPage,
    setActions,
    setOpenModalDelete,
  } = useContext(FileContext);
  const columns = [
    {
      title: "STT",
      render: (text: string, record: any, index: number) => {
        return (
          paramsPage.page * paramsPage.pageSize -
          paramsPage.pageSize +
          index +
          1
        );
      },
      align: "center" as "center",
      width: 60,
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center" as "center",
      key: "name",
    },
    {
      title: "status",
      dataIndex: "status",
      align: "center" as "center",
      key: "status",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center" as "center",
      key: "price",
    },
    {
      title: "originalPrice",
      dataIndex: "originalPrice",
      align: "center" as "center",
      key: "originalPrice",
    },
    {
      title: "slug",
      dataIndex: "slug",
      align: "center" as "center",
      key: "slug",
    },

    {
      title: "Thao tác",
      render: (text: string, record: any) => (
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Chỉnh sửa">
            <EditOutlined
              style={{ fontSize: "18px", margin: "0 6px" }}
              onClick={() => {
                setActions((prev: any) => {
                  return { ...prev, update: true };
                });
              }}
            />
          </Tooltip>
          <Tooltip title="Xóa">
            <DeleteOutlined
              style={{ fontSize: "18px", margin: "0 6px" }}
              onClick={() => setOpenModalDelete(true)}
            />
          </Tooltip>
        </div>
      ),
      width: 90,
      fixed: "right",
    },
  ];

  return (
    <Fragment>
      <TableWrapper
        columns={columns}
        data={dataTable}
        setItemTarget={setItemTarget}
        itemTarget={itemTarget}
        hiddenRowSelection
        style={
          actions["create"]
            ? { pointerEvents: "none" }
            : { textAlign: "justify" }
        }
        scroll={{ x: 800, y: "calc(100vh - 270px)" }}
      />
    </Fragment>
  );
}
export default TableForm;
