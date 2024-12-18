import { useContext, useEffect, useState } from "react";
import { BASE_URL_DEV, Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";

const useBanner = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const { setLoading } = useContext(AppContext);
  const getBanner = async () => {
    try {
      const response = await httpMethod.get(
        `${BASE_URL_DEV}/products?&slug=banner&page=1&size=10`
      );
      if (response.status === 200) {
        setData(response.data.items);
      }
    } catch (error: any) {
      showError("call api banner có vấn đề rồi");
    }
  };
  useEffect(() => {
    getBanner();
  }, []);

  return { data };
};

export default useBanner;
