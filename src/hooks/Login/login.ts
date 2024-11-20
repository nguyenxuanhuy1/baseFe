import { useState } from "react";
import { showError, showSuccess } from "helpers/toast";
import httpMethod from "services/httpMethod";

const useLogin = () => {
  const logIn = async (inforLogin: any) => {
    try {
      const response = await httpMethod.post(
        `http://localhost:3001/api/auth/login`,
        inforLogin,
        { withCredentials: true }
      );

      if (response.status === 201) {
        const { access_token } = response.data;
        httpMethod.attachTokenToHeader(access_token);
        localStorage.setItem("access_token", access_token);
        showSuccess(response.data.message || "Đăng nhập thành công!");
        return true;
      }
    } catch (err: any) {
      if (err.response) {
        showError(err.response.data.message[0] || "Đã xảy ra lỗi!");
      } else {
        showError("Vui lòng thử lại sau.");
      }
      return false;
    }
  };

  return { logIn };
};

export default useLogin;
