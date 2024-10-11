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
import { IFile } from "./helper/interface";
import useDeleteBanner from "hooks/banners/useDeleteBanner";

export const FileContext = createContext<IFile>({
  setActions: () => null,
  setSearchForm: () => null,
  setParamsPage: () => null,
  setOpenModalDelete: () => null,
  setIsClick: () => null,
  setItemTarget: () => null,
  refreshData: () => null,
  actions: { create: false, update: false, delete: false },
  dataTable: [],
  formikRef: {},
  searchForm: initialValueSearchForm,
  paramsPage: {
    pageSize: 10,
    page: 1,
  },
  isClick: false,
  itemTarget: {},
});

const QuanLyBanner = () => {
  // State
  const [actions, setActions] = useActions();
  const { deleteBanner } = useDeleteBanner();
  const [searchForm, setSearchForm] = useState<any>(initialValueSearchForm);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [itemTarget, setItemTarget] = useState<any | null>(null);
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
    <FileContext.Provider
      value={{
        setOpenModalDelete,
        setItemTarget,
        setActions,
        setSearchForm,
        setIsClick,
        setParamsPage,
        refreshData,

        actions,
        dataTable,
        formikRef,
        paramsPage,
        searchForm,
        itemTarget,
      }}
    >
      <Row>
        <Col span={16}>
          <SearchForm />
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
          title={`Bạn chắc chắn muốn xóa ${itemTarget?.slug}?`}
          open={openModalDelete}
          onOk={async () => {
            setActions((prev: any) => {
              return { ...prev, delete: true };
            });
            await deleteBanner(
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
  );
};
export default QuanLyBanner;
