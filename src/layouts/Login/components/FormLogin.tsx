import { Modal } from "antd";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { showError } from "helpers/toast";
import { useAuth } from "providers/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import BaseUrl from "constants/baseUrl";
import Input from "components/CustomField/InputField";
import { ButtonHTMLTypes } from "interfaces/common";
import { useState } from "react";
import { validationLoginSchema } from "../helper/validation";
import Button from "components/CustomButton";
import { valueLogin } from "../helper/inittialValue";
import useLogin from "hooks/Login/login";
interface IProps {
  open: boolean;
  onCancel: () => void;
}

const Login = (props: IProps) => {
  const { open, onCancel } = props;
  const auth = useAuth();
  const [loginAndRegis, setLoginAndRegis] = useState(false);
  // const { login } = useAuth();
  // const { isAuthenticated, logIn } = useLogin();
  // if (isAuthenticated) {
  //   return <Navigate to={BaseUrl.Pageuser} />;
  // }
  return (
    <Modal open={open} onCancel={onCancel} footer={false} width={"68%"}>
      <Formik
        initialValues={valueLogin}
        validationSchema={validationLoginSchema}
        onSubmit={async (values) => {
          try {
            const { username, password } = values;
            // await logIn(username, password);
          } catch (error) {
            showError("Đăng nhập thất bại");
          }
        }}
      >
        {({}) => {
          return (
            <Form>
              <div className="loginRegister">
                <div className="item-left">
                  <div className="btn-loginRes">
                    <a
                      onClick={() => {
                        setLoginAndRegis(false);
                      }}
                      className={`pointer ${!loginAndRegis ? "bold" : ""}`}
                    >
                      Đăng nhập
                    </a>
                    <a
                      className={`pointer ${loginAndRegis ? "bold" : ""}`}
                      onClick={() => {
                        setLoginAndRegis(true);
                      }}
                    >
                      Đăng kí
                    </a>
                    <div></div>
                  </div>
                  {loginAndRegis === false ? (
                    <>
                      <div style={{ marginBottom: 2 }}>
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
                      <div>
                        Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu
                        thích và nhận nhiều ưu đãi hấp dẫn
                      </div>
                    </>
                  )}
                </div>
                <div className="item-right">
                  <img
                    src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg"
                    alt="lỗi img login"
                  ></img>
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
