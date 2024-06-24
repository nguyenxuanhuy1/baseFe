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
  console.log("data", data);

  const APIs = [`${Body.FEATURED}`, `${Body.FEATURED2}`, `${Body.FEATURED3}`];

  const getTrending = async (url: string) => {
    setLoading(true);
    try {
      const response = await httpMethod.get(url);
      setData((prevData) => {
        const newData = [...prevData, ...response.data.list];
        return newData.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );
      });
    } catch (error: any) {
      showError("call api featured thất bại");
    } finally {
      setLoading(false);
    }
  };
  const loadMore = () => {
    if (currentPage < APIs.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    getTrending(APIs[currentPage]);
  }, [currentPage]);

  return { data, loadMore };
};

export default useTrending;
