import { Col, Row, Table } from "antd";
import { createContext } from "react";
import TableForm from "./components/TableForm";
import SearchForm from "./components/SearchForm";

export const FileContext = createContext<any>({});

const QuanLySanPham = () => {
  return (
    <>
      <FileContext.Provider value={{}}>
        <Row>
          <div className="w-full">
            <SearchForm />
            <TableForm />
          </div>
        </Row>
      </FileContext.Provider>
    </>
  );
};
export default QuanLySanPham;
