import { Modal } from "antd";
import { FastField, Form, Formik } from "formik";
import { useAuth } from "providers/AuthenticationProvider";
import Input from "components/CustomField/InputField/index";
import { ButtonHTMLTypes } from "interfaces/common";
import { useState } from "react";
import {
  validationLoginSchema,
  validationRegisterSchema,
} from "./helper/validation";
import Button from "components/CustomButton";
import { valueLogin, valueRegis } from "./helper/inittialValue";
import useLogin from "hooks/Login/login";
import useRegister from "hooks/Login/register";
import useGetUserInfor from "hooks/Login/getInforUser";
interface IProps {
  open: boolean;
  onCancel: () => void;
}

const Login = (props: IProps) => {
  const { open, onCancel } = props;
  const auth = useAuth();
  const [loginAndRegis, setLoginAndRegis] = useState(false);
  // const { login } = useAuth();
  const { logIn } = useLogin();
  const { Register } = useRegister();
  const { saveInfor } = useGetUserInfor();
  return (
    <Modal open={open} onCancel={onCancel} footer={false} width={"68%"}>
      <Formik
        initialValues={loginAndRegis ? valueRegis : valueLogin}
        validationSchema={
          loginAndRegis ? validationRegisterSchema : validationLoginSchema
        }
        onSubmit={async (values) => {
          if (loginAndRegis === false) {
            const isSuccess = await logIn(values);
            if (isSuccess) {
              onCancel();
              saveInfor();
            }
          } else {
            const { confirmPassword, ...deleteCfPass } = values;
            const isSuccess = await Register(deleteCfPass);
            if (isSuccess) onCancel();
          }
        }}
      >
        {({ resetForm }) => {
          return (
            <Form>
              <div className="loginRegister">
                <div className="item-left">
                  <div className="btn-loginRes">
                    <a
                      onClick={() => {
                        setLoginAndRegis(false);
                        resetForm();
                      }}
                      className={`pointer login ${
                        !loginAndRegis ? "bold" : ""
                      }`}
                    >
                      Đăng nhập
                    </a>
                    <a
                      className={`pointer register ${
                        loginAndRegis ? "bold" : ""
                      }`}
                      onClick={() => {
                        setLoginAndRegis(true);
                        resetForm();
                      }}
                    >
                      Đăng kí
                    </a>
                  </div>
                  {loginAndRegis === false ? (
                    <>
                      <div className="responsive-text">
                        Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm
                        yêu thích và nhận nhiều ưu đãi hấp dẫn
                      </div>
                      <div>
                        <FastField
                          style={{
                            height: "40px",
                            width: "100%",
                          }}
                          component={Input}
                          name="username"
                          label="Tài khoản"
                          placeholder="Tài khoản"
                          fullWidth
                        />
                        <FastField
                          style={{
                            height: "40px",
                            width: "100%",
                          }}
                          component={Input}
                          name="password"
                          placeholder="Password"
                          type="password"
                          label="Mật khẩu"
                        />
                      </div>
                      <div className="forget-pass">
                        <a>Bạn đã não cá vàng?</a>
                      </div>
                      <Button
                        htmlType={ButtonHTMLTypes.Submit}
                        title="Đăng nhập"
                        style={{
                          width: "100%",
                          height: "40px",
                          backgroundColor: "#2579F2",
                          color: "#fff",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <div className="responsive-text">
                        Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu
                        thích và nhận nhiều ưu đãi hấp dẫn
                      </div>
                      <div>
                        <FastField
                          style={{
                            height: "40px",
                            width: "100%",
                          }}
                          component={Input}
                          name="username"
                          label="Tài khoản đăng nhập"
                          placeholder="Tài khoản"
                        />
                        <FastField
                          style={{
                            height: "40px",
                            width: "100%",
                          }}
                          component={Input}
                          name="password"
                          placeholder="Mật khẩu"
                          type="password"
                          label="Mật khẩu"
                        />
                        <FastField
                          style={{
                            height: "40px",
                            width: "100%",
                          }}
                          component={Input}
                          name="confirmPassword"
                          placeholder="Xác nhận mật khẩu"
                          type="password"
                          label="Xác nhận mật khẩu"
                        />
                        <FastField
                          style={{
                            height: "40px",
                            width: "100%",
                          }}
                          component={Input}
                          name="email"
                          placeholder="Nhập gmail"
                          type="gmail"
                          label="Gmail"
                        />
                      </div>
                      <Button
                        htmlType={ButtonHTMLTypes.Submit}
                        title="Đăng kí"
                        style={{
                          width: "100%",
                          height: "40px",
                          backgroundColor: "#2579F2",
                          color: "#fff",
                        }}
                      />
                    </>
                  )}
                </div>
                <div className="item-right">
                  <img src="/Authen.png" alt="lỗi img login"></img>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default Login;
