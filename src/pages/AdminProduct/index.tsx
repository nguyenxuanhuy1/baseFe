import { Col, Row, Table } from "antd";
import { createContext, useState } from "react";
import TableForm from "./components/TableForm";
import SearchForm from "./components/SearchForm";
import ModalConfirm from "components/Modal/ModalConfirm";
import useActions from "constants/action";
import DataForm from "./components/DataForm";

export const FileContext = createContext<any>({});

const QuanLySanPham = () => {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [itemTarget, setItemTarget] = useState<any | null>(null);
  const [actions, setActions] = useActions();
  return (
    <>
      <FileContext.Provider value={{}}>
        <Row>
          <Col span={15}>
            <SearchForm />
            <TableForm />
          </Col>
          <Col span={9}>
            <DataForm />
          </Col>
        </Row>
        {openModalDelete && (
          <ModalConfirm
            title={`Bạn chắc chắn muốn xóa ${itemTarget.name}?`}
            open={openModalDelete}
            onOk={async () => {
              setActions((prev: any) => {
                return { ...prev, delete: true };
              });
              // await deleteSector(
              //   itemTarget?.id as number,
              //   refreshData,
              //   setActions,
              //   setItemTarget,
              //   setOpenModalDelete
              // );
            }}
            onCancel={() => setOpenModalDelete(false)}
          />
        )}
      </FileContext.Provider>
    </>
  );
};
export default QuanLySanPham;
