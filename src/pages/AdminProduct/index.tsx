import { Col, Row, Table } from "antd";
import { createContext, MutableRefObject, useRef, useState } from "react";
import TableForm from "./components/TableForm";
import ModalConfirm from "components/Modal/ModalConfirm";
import useActions from "constants/action";
import DataForm from "./components/DataForm";
import SearchImg from "./components/SearchImg";
import useSearchProducts from "hooks/HooksForAdmin/Product/Search";
import { IParamsPage } from "interfaces/common";
import { initialValues } from "./helper/initialValues";
import Pagination from "components/Table/Pagination";
import useDeleteSector from "hooks/HooksForAdmin/Product/Delete";

export const FileContext = createContext<any>({});

const QuanLySanPham = () => {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [itemTarget, setItemTarget] = useState<any | null>(null);
  const [actions, setActions] = useActions();
  const [paramsPage, setParamsPage] = useState<IParamsPage>({
    pageSize: 10,
    page: 1,
  });
  const [searchForm, setSearchForm] = useState<any>(initialValues);
  const { deleteSector } = useDeleteSector();
  const formikRef: MutableRefObject<any> = useRef<any>();
  const {
    data: dataTable,
    meta,
    refresh: refreshData,
  } = useSearchProducts({
    paramsPage,
    setParamsPage,
    searchForm,
  });

  return (
    <>
      <FileContext.Provider
        value={{
          actions,
          dataTable,
          itemTarget,
          meta,
          paramsPage,
          openModalDelete,
          formikRef,
          refreshData,
          setItemTarget,
          setSearchForm,
          setActions,
          setOpenModalDelete,
        }}
      >
        <Row>
          <Col span={16}>
            <SearchImg />
            <TableForm />
            <Pagination
              paramsPage={paramsPage}
              setParamsPage={setParamsPage}
              total={meta}
            />
          </Col>
          <Col span={8}>
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
              await deleteSector(
                itemTarget?.id as number,
                refreshData,
                setActions,
                setItemTarget,
                setOpenModalDelete
              );
            }}
            onCancel={() => setOpenModalDelete(false)}
          />
        )}
      </FileContext.Provider>
    </>
  );
};
export default QuanLySanPham;
