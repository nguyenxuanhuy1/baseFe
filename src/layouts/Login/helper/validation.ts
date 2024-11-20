import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required("Tài khoản chưa nhập"),
  password: Yup.string().required("Mật khẩu chưa nhập"),
});
export const validationRegisterSchema = Yup.object().shape({
  username: Yup.string().required("Tài khoản chưa nhập"),
  password: Yup.string()
    .required("Mật khẩu là bắt buộc")
    .min(6, "Mật khẩu phải ít nhất 6 ký tự"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
    .required("Xác nhận mật khẩu là bắt buộc"),

  email: Yup.string().email("Email không hợp lệ").required("Gmail là bắt buộc"),
});
