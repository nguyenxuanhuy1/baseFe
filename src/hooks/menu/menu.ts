import { useEffect, useState } from "react";
import { BASE_URL, Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
// import { AppContext } from "App";

const useMenu = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const getMenu = async () => {
    try {
      const response = await httpMethod.get(`${Body.MENU}`);
      if (response.status === 200) {
        setData(response.data.list);
      }
    } catch (error: any) {
      showError("có vấn đề rồi");
    }
  };
  useEffect(() => {
    getMenu();
  }, []);
  //! render
  return { data };
};

export default useMenu;
