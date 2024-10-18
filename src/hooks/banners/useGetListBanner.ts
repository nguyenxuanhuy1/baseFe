import { useContext, useEffect, useState } from "react";
import { IMeta, IParamsPage } from "interfaces/common";
import { showError } from "helpers/toast";
import { AppContext } from "App";
import httpMethod from "services/httpMethod";

interface IProps {
  paramsPage: IParamsPage;
  setParamsPage?: any;
  searchForm?: any;
  isClick?: boolean;
}
const useGetListBanner = (props: IProps) => {
  //! state
  const { paramsPage, searchForm, setParamsPage, isClick } = props;
  const [data, setData] = useState<any[]>([]);
  const [meta, setMeta] = useState<number>(0);
  const { setLoading } = useContext(AppContext);

  //! function
  const getSearch = async () => {
    if (searchForm) {
      try {
        const payload = {
          ...searchForm,
          page: paramsPage.page,
          pageSize: paramsPage.pageSize,
        };
        const response = await httpMethod.post(
          `http://localhost:3001/banners/search`,
          payload
        );
        if (response.status === 200) {
          setData(response.data.list);
          setMeta(response.data.totalItems);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          showError(error.response?.data?.message);
        } else {
          showError("Có lỗi xảy ra, vui lòng thử lại sau");
        }
      }
    }
  };
  const refresh = () => {
    getSearch();
  };

  //! useEffect
  useEffect(() => {
    if (isClick) {
      if (paramsPage.page === 1) {
        getSearch();
      } else {
        setParamsPage({ page: 1, pageSize: paramsPage.pageSize });
      }
    }
  }, [searchForm]);

  useEffect(() => {
    getSearch();
  }, [paramsPage]);

  //! render
  return { refresh, data, meta };
};

export default useGetListBanner;
