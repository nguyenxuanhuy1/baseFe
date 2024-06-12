import { useContext, useEffect, useState } from "react";
import { Body } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
import { AppContext } from "App";
// import { AppContext } from "App";

const useTrending = () => {
  //! state
  const [data, setData] = useState<any[]>([]);
  //   const { setLoading } = useContext(AppContext);

  const getTrending = async () => {
    // setLoading(true);
    try {
      const response = await httpMethod.get(`${Body.FEATURED}`);
      if (response.status === 200) {
        setData(response.data.list);
      }
    } catch (error: any) {
      showError("call api featured có vấn đề rồi");
    } finally {
      //   setLoading(false);
    }
  };
  useEffect(() => {
    getTrending();
  }, []);

  return { data };
};

export default useTrending;
