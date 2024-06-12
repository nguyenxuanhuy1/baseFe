import { useEffect, useState } from "react";
import { Header } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";

const useMidHeader = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const getMidheader = async () => {
    try {
      const response = await httpMethod.get(`${Header.MID}`);
      if (response.status === 200) {
        setData(response.data.data.homeTopMenu.shortcuts);
      }
    } catch (error: any) {
      showError("Lấy getMidheader lỗi");
    }
  };
  useEffect(() => {
    getMidheader();
  }, []);
  //! render
  return { data };
};

export default useMidHeader;
