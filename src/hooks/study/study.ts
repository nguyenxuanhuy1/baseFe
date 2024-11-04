import { useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
const useStudy = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const APIs = [`${Body.STUDY}`, `${Body.STUDY1}`, `${Body.STUDY2}`];
  const getStudy = async (url: string) => {
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
      //   showError("call api Study có vấn đề rồi");
      console.log("call Study lỗi");
    }
    // }
  };

  const loadMoreStudy = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % APIs.length);
  };
  useEffect(() => {
    getStudy(APIs[currentPage]);
  }, [currentPage]);

  return { data, loadMoreStudy };
};

export default useStudy;
