import { useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
const useSteam = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const APIs = [`${Body.STEAM}`, `${Body.STEAM1}`, `${Body.STEAM2}`];
  const getSteam = async (url: string) => {
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
      //   showError("call api Steam có vấn đề rồi");
      console.log("call Steam lỗi");
    }
    // }
  };

  const loadMoreSteam = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % APIs.length);
  };
  useEffect(() => {
    getSteam(APIs[currentPage]);
  }, [currentPage]);

  return { data, loadMoreSteam };
};

export default useSteam;
