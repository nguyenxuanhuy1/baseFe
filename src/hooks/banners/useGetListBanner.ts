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
    setLoading(true);
    if (searchForm) {
      try {
        const response = await httpMethod.get(
          `http://localhost:3001/banners123123123`
        );
        if (response.status === 200) {
          setData(response.data.content);
          setMeta(response.data.totalElements);
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
