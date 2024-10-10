import { Col, Row, Table } from "antd";
import { createContext, MutableRefObject, useRef, useState } from "react";
import TableForm from "./components/TableForm";
import SearchForm from "./components/SearchForm";
import ModalConfirm from "components/Modal/ModalConfirm";
import useActions from "constants/action";
import DataForm from "./components/DataForm";
import useGetListBanner from "hooks/banners/useGetListBanner";
import { initialValueSearchForm } from "./helper/inittialValue";
import Pagination from "components/Table/Pagination";

export const FileContext = createContext<any>({
  actions: { create: false, update: false, delete: false },
  setActions: () => null,
  dataTable: [],
  formikRef: {},
  setParamsPage: () => null,
  searchForm: initialValueSearchForm,
  paramsPage: {
    pageSize: 10,
    page: 1,
  },
});

const QuanLyBanner = () => {
  // State
  const [searchForm, setSearchForm] = useState<any>(initialValueSearchForm);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [itemTarget, setItemTarget] = useState<any | null>(null);
  const [actions, setActions] = useActions();
  const formikRef: MutableRefObject<any> = useRef<any>();
  const [paramsPage, setParamsPage] = useState<any>({
    pageSize: 10,
    page: 1,
  });
  // end State

  // Call HOOK
  const {
    data: dataTable,
    refresh: refreshData,
    meta,
  } = useGetListBanner({
    paramsPage,
    setParamsPage,
    searchForm,
    isClick,
  });
  // End hook
  return (
    <FileContext.Provider value={{ actions, setActions, dataTable }}>
      <Row>
        <Col span={15}>
          <SearchForm />
          <TableForm />
          <Pagination
            paramsPage={paramsPage}
            setParamsPage={setParamsPage}
            total={meta}
          />
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
  );
};
export default QuanLyBanner;
