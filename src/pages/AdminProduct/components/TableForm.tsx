import { Fragment, useContext } from "react";
import { FileContext } from "..";
import { Formik } from "formik";
import { Table, Tooltip } from "antd";
import TableWrapper from "components/Table/TableWrapper";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { renderStatus } from "../helper/renderTag";

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
      title: "Tên sản phẩm",
      dataIndex: "name",
      align: "center" as "center",
      key: "name",
      width: 200,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      align: "center" as "center",
      key: "status",
      render: (status: string) => renderStatus(status),
      width: 120,
    },
    {
      title: "Giá gốc",
      dataIndex: "price",
      align: "center" as "center",
      key: "price",
      width: 120,
      render: (value: number) => {
        return (
          <span>
            {new Intl.NumberFormat("vi-VN").format(value)}
            <sup
              style={{ fontSize: "12px", position: "relative", top: "-8px" }}
            >
              VND
            </sup>
          </span>
        );
      },
    },
    {
      title: "Giá sau khi giảm",
      dataIndex: "originalPrice",
      align: "center" as "center",
      key: "originalPrice",
      width: 140,
      render: (value: number) => {
        return (
          <span>
            {new Intl.NumberFormat("vi-VN").format(value)}
            <sup
              style={{ fontSize: "12px", position: "relative", top: "-8px" }}
            >
              VND
            </sup>
          </span>
        );
      },
    },
    {
      title: "Thuộc loại",
      dataIndex: "slug",
      align: "center" as "center",
      key: "slug",
      width: 120,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      align: "center" as "center",
      key: "slug",
      width: 90,
      render: (imageUrl: string) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={imageUrl}
            alt="Ảnh"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
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
