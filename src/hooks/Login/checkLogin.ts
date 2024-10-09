import { useContext, useEffect } from "react";
import axios from "axios";
import { FileContext } from "../../layouts/Login/index";
const useCheckLogin = () => {
  const { setIsAuthenticated, setUser } = useContext(FileContext);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/member", {
          withCredentials: true,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
          setUser(response.data);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, [setIsAuthenticated, setUser]);
};

export default useCheckLogin;
