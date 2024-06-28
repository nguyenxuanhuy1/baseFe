import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required("Tài khoản chưa nhập"),
  password: Yup.string().required("Mật khẩu chưa nhập"),
});
export const validationRegisterSchema = Yup.object().shape({
  username: Yup.string().required("Tài khoản chưa nhập"),
  password: Yup.string().required("Mật khẩu chưa nhập"),
  email: Yup.string().required("Email chưa nhập"),
});
