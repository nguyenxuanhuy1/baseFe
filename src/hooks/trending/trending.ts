import { useContext, useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";

const useTrending = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { setLoading } = useContext(AppContext);

  const APIs = [`${Body.TRENDING}`, `${Body.TRENDING1}`, `${Body.TRENDING2}`];

  const getTrending = async (url: string) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const loadMoreTrending = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % APIs.length);
  };
  useEffect(() => {
    getTrending(APIs[currentPage]);
  }, [currentPage]);

  return { data, loadMoreTrending };
};

export default useTrending;
