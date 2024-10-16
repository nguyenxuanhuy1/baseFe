import { useContext, useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";

const useFeatured = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { setLoading } = useContext(AppContext);

  const APIs = [`${Body.FEATURED}`, `${Body.FEATURED1}`, `${Body.FEATURED2}`];

  const getFeatured = async (url: string) => {
    // if (!data) {
    try {
      const response = await httpMethod.get(url);
      if (response.status === 200) {
        setData((prevData) => {
          const newData = response.data.list.filter(
            (item: any) =>
              !prevData.some((prevItem: any) => prevItem.id === item.id)
          );
          return [...prevData, ...newData];
        });
      }
    } catch (error: any) {
      showError("call api featured có vấn đề rồi");
    }
    // }
  };

  const loadMorefeatured = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % APIs.length);
  };
  useEffect(() => {
    getFeatured(APIs[currentPage]);
  }, [currentPage]);

  return { data, loadMorefeatured };
};

export default useFeatured;
