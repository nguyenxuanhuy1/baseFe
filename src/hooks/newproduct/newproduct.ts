import { useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
const useNewProduct = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const APIs = [
    `${Body.NEWPRODUCT}`,
    `${Body.NEWPRODUCT1}`,
    `${Body.NEWPRODUCT2}`,
  ];
  const getNewProduct = async (url: string) => {
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
      //   showError("call api NewProduct có vấn đề rồi");
      console.log("call sản phẩm mới lỗi");
    }
    // }
  };

  const loadMoreNewProduct = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % APIs.length);
  };
  useEffect(() => {
    getNewProduct(APIs[currentPage]);
  }, [currentPage]);

  return { data, loadMoreNewProduct };
};

export default useNewProduct;
