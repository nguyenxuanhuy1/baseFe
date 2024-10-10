import { useContext, useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";
// import { AppContext } from "App";

const useBanner = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  const { setLoading } = useContext(AppContext);

  const getBanner = async () => {
    setLoading(true);
    try {
      const response = await httpMethod.get(`${Body.BANNER}`);
      // const response = await httpMethod.get(`http://localhost:3001/banners`);
      if (response.status === 200) {
        setData(response.data.list);
      }
    } catch (error: any) {
      showError("call api banner có vấn đề rồi");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBanner();
  }, []);

  return { data };
};

export default useBanner;
