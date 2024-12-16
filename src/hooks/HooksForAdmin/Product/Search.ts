import { useContext, useEffect, useState } from "react";
import { IMeta, IParamsPage } from "interfaces/common";
import httpMethod from "../../../services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";
import { BASE_URL_DEV } from "constants/api";

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

  const getSearchDepartment = async () => {
    setLoading(true);
    if (searchForm) {
      try {
        const response = await httpMethod.get(
          `${BASE_URL_DEV}/products?&name=${
            searchForm?.values?.name || ""
          }&page=${paramsPage.page}&size=${paramsPage.pageSize}`
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
  return { refresh, data, meta };
};

export default useSearchProducts;
