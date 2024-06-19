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

  const APIs = [`${Body.FEATURED}`, `${Body.FEATURED2}`, `${Body.FEATURED3}`];

  const getTrending = async (url: string) => {
    setLoading(true);
    try {
      const response = await httpMethod.get(url);
      if (response.status === 200) {
        setData((prevData) => [...prevData, ...response.data.list]);
      }
    } catch (error: any) {
      showError("call api featured có vấn đề rồi");
    } finally {
      setLoading(false);
    }
  };
  console.log("data", data);

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
