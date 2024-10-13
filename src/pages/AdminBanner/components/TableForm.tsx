import { Fragment, useContext } from "react";
import { FileContext } from "..";
import TableWrapper from "components/Table/TableWrapper";
import { Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function TableForm() {
  const {
    dataTable,
    setActions,
    setOpenModalDelete,
    setItemTarget,
    itemTarget,
  } = useContext(FileContext);
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      align: "center" as "center",
      width: 100,
    },
    {
      title: "Loại",
      dataIndex: "slug",
      key: "slug",
      width: 100,
      align: "center",
    },
    {
      title: "Link ảnh",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text: string, record: any) => (
        <div>
          <img
            src={
              // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbl47VAQK_3kDo3-L6d84Y2qX-f0TTUlgIQ&s"
              "http://localhost:3001/public/uploads/" + text
            }
            alt="ERR"
            className="w-[200px] m-auto"
          />
        </div>
      ),
    },
    {
      title: "Link",
      dataIndex: "href",
      key: "price",
      align: "center",
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
        data={dataTable.map((el: any) => {
          return {
            ...el,
            key: el.id,
          };
        })}
        hiddenRowSelection
        scroll={{ x: 1200 }}
        setItemTarget={setItemTarget}
        itemTarget={itemTarget}
      />
    </Fragment>
  );
}
export default TableForm;
