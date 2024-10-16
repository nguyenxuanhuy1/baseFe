import { useState } from "react";
import { showError, showSuccess } from "helpers/toast";
import httpMethod from "services/httpMethod";

const useRegister = () => {
  //! State
  const [user, setUser] = useState<any>(null);

  const Register = async (inforRegis: any) => {
    try {
      const response = await httpMethod.post(
        `http://localhost:3001/user/register`,
        inforRegis,
        { withCredentials: true }
      );

      if (response.status === 201) {
        // setIsAuthenticated(true);
        setUser(response.data.user);
        showSuccess(response.data.message || "Đăng kí thành thành công!");
      }
    } catch (err: any) {
      if (err.response && err.response.status === 400) {
        showError(err.response.data.message[0]);
      } else {
        showError("Vui lòng thử lại sau.");
      }
    }
  };

  return { Register, user };
};

export default useRegister;
