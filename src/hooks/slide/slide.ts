import { useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";

const useSlide = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const getSlide = async () => {
    try {
      const response = await httpMethod.get(`${Body.SLIDE}`);
      if (response.status === 200) {
        setData(response.data.list);
      }
    } catch (error: any) {
      // showError("Gọi api Slide lỗi rồi");
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
