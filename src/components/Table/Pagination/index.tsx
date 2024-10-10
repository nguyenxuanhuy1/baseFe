import { Pagination as PaginationAntd } from "antd";
import { PaginationProps } from "./Pagination.interface";
import viVN from "antd/es/locale/vi_VN"; // Import ngôn ngữ tiếng Việt

const Pagination = ({
  className,
  total,
  defaultPageSize,
  defaultCurrent,
  pageSizeOptions,
  paramsPage,
  onChange,
  setParamsPage,
}: PaginationProps) => {
  //! function
  const handlePaginationChange = (page: number, size: number) => {
    if (size !== paramsPage.pageSize) {
      setParamsPage({ page: 1, pageSize: size });
    } else {
      setParamsPage({ ...paramsPage, page });
    }
  };

  //! render
  return (
    <PaginationAntd
      className={`custom-pagination ${className}`}
      showSizeChanger
      locale={viVN.Pagination}
      total={total}
      pageSize={paramsPage.pageSize}
      current={paramsPage.page}
      defaultPageSize={defaultPageSize || 10}
      defaultCurrent={defaultCurrent || 1}
      pageSizeOptions={pageSizeOptions || ["10", "20", "50"]}
      showTotal={(total, range) => {
        return total > (defaultPageSize || 0)
          ? `${range[0]}-${range[1]} trong tổng số ${total}`
          : "";
      }}
      onChange={onChange || handlePaginationChange}
    />
  );
};

export default Pagination;
