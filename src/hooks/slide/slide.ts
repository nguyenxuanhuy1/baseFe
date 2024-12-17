import { useEffect, useState } from "react";
import { BASE_URL_DEV, Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";

const useSlide = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const getSlide = async () => {
    try {
      const response = await httpMethod.get(
        `${BASE_URL_DEV}/products?&slide&page=1&size=10`
      );
      if (response.status === 200) {
        setData(response.data.items);
      }
    } catch (error: any) {
      console.log("Gọi api Slide lỗi rồi");
    }
  };
  useEffect(() => {
    getSlide();
  }, []);
  //! render
  return { data };
};

export default useSlide;
