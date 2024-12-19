import { BASE_URL_DEV } from "constants/api";
import { initParamPage } from "constants/categories/common";
import { IParamsPage } from "interfaces/common";
import { useEffect, useState } from "react";
import httpMethod from "services/httpMethod";

const useFeatured = () => {
  const [paramsPage, setParamsPage] = useState<IParamsPage>(initParamPage);
  const [data, setData] = useState<any[]>([]);
  console.log("dataaa", data);

  const getFeatured = async () => {
    try {
      const response = await httpMethod.get(
        `${BASE_URL_DEV}/products?&slug=banner&page=${paramsPage.page}&size=${paramsPage.pageSize}`
      );
      if (response.status === 200) {
        setData((prevData) => {
          const newData = response.data.items.filter(
            (item: any) =>
              !prevData.some((prevItem: any) => prevItem.id === item.id)
          );
          return [...prevData, ...newData];
        });
      }
    } catch (error: any) {
      console.log("call featured lỗi");
    }
  };

  useEffect(() => {
    getFeatured();
  }, [paramsPage.pageSize]);

  const loadMorefeatured = () => {
    setParamsPage((prev) => ({
      ...prev,
      pageSize: prev.pageSize + 8,
    }));
  };

  return { data, loadMorefeatured };
};

export default useFeatured;
