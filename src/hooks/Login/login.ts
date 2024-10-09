import { useState } from "react";
import { showError, showSuccess } from "helpers/toast";
import httpMethod from "services/httpMethod";

const useLogin = () => {
  //! State
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const logIn = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await httpMethod.post(
        `http://localhost:3001/user/login`,
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        // setIsAuthenticated(true);
        setUser(response.data.user);
        showSuccess(response.data.message || "Đăng nhập thành công!");
      } else {
        // setIsAuthenticated(false);
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        showError(err.response.data.message);
      } else {
        showError("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { logIn, loading, user };
};

export default useLogin;
