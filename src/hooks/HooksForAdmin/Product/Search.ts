import { useContext, useEffect, useState } from "react";
import { IMeta, IParamsPage } from "interfaces/common";
import httpMethod from "../../../services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";

interface IProps {
  paramsPage: IParamsPage;
  setParamsPage?: any;
  searchForm?: any;
}
const useSearchProducts = (props: IProps) => {
  //! state
  const { paramsPage, searchForm, setParamsPage } = props;
  const [data, setData] = useState<any[]>([]);
  const [meta, setMeta] = useState<number>(0);
  const { setLoading } = useContext(AppContext);

  //! function
  const getSearchDepartment = async () => {
    setLoading(true);
    if (searchForm) {
      const payload = {
        ...searchForm,
        page: paramsPage.page - 1,
        size: paramsPage.pageSize,
      };
      try {
        const response = await httpMethod.get(
          `http://localhost:3001/api/products?parentId=1&categoryId=1&page=1&size=10`
        );
        if (response.status === 200) {
          setData(response.data.items);
          setMeta(response.data.total);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          showError(error.response?.data?.message);
        } else {
          showError("Có lỗi xảy ra, vui lòng thử lại sau");
        }
      } finally {
        setLoading(false);
      }
    }
  };
  const refresh = () => {
    getSearchDepartment();
  };

  //! useEffect
  useEffect(() => {
    if (paramsPage.page === 1) {
      getSearchDepartment();
    } else {
      setParamsPage({ page: 1, pageSize: paramsPage.pageSize });
    }
  }, [searchForm]);

  useEffect(() => {
    getSearchDepartment();
  }, [paramsPage]);

  //! render
  return { refresh, data, meta };
};

export default useSearchProducts;
