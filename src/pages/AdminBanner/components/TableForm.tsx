import { Fragment, useContext } from "react";
import { FileContext } from "..";
import { Formik } from "formik";
import { Table } from "antd";

function TableForm() {
  const {} = useContext(FileContext);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Product 1",
      price: 100,
    },
    {
      key: "2",
      name: "Product 2",
      price: 200,
    },
  ];
  return (
    <Fragment>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      {/* <Formik onSubmit={(values) => {}} initialValues={[]}></Formik> */}
    </Fragment>
  );
}
export default TableForm;
