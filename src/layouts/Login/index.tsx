import { Modal } from "antd";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { showError } from "helpers/toast";
import { useAuth } from "providers/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import BaseUrl from "constants/baseUrl";
import Input from "components/CustomField/InputField";
import Button from "components/CustomButton";
import { ButtonHTMLTypes } from "interfaces/common";
// import aaa from "../../../public/Authen.png";
interface IProps {
  open: boolean;
  onCancel: () => void;
}
const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required field!"),
  password: Yup.string().required("Password is required field!"),
});
const Login = (props: IProps) => {
  const { open, onCancel } = props;
  const auth = useAuth();
  const { login } = useAuth();
  if (auth.isLogged) {
    return <Navigate to={BaseUrl.Pageuser} />;
  }
  return (
    <Modal open={open} onCancel={onCancel} footer={false} width={"68%"}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationLoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            const { username, password } = values;
            setSubmitting(true);
            login({ username, password });
            setSubmitting(false);
          } catch (error) {
            showError(error);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="flex">
                <div className="left">
                  <div style={{ marginBottom: 2 }}>
                    Sign in with your username and password (xhuy/xhuy)
                  </div>
                  <div style={{ marginBottom: 2 }}>
                    Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu
                    thích và nhận nhiều ưu đãi hấp dẫn
                  </div>

                  <div>
                    <FastField
                      component={Input}
                      name="username"
                      label="Username"
                      fullWidth
                    />
                    <FastField
                      component={Input}
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </div>

                  <Button htmlType={ButtonHTMLTypes.Submit} title="Sign in" />
                </div>
                <div className="right">
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
