import React from "react";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { showError } from "helpers/toast";
import { useAuth } from "providers/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import BaseUrl from "constants/baseUrl";
import Input from "components/CustomField/InputField/inputPro";
import Button from "components/CustomButton";
import { ButtonHTMLTypes, ButtonType } from "interfaces/common";

const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required field!"),
  password: Yup.string().required("Password is required field!"),
});

const Login = () => {
  //! State
  const auth = useAuth();
  const { login } = useAuth();

  //! Function

  //! Render
  if (auth.isLogged) {
    return <Navigate to={BaseUrl.Homepage} />;
  }

  return (
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
            <div style={{ marginBottom: 2 }}>
              Sign in with your username and password (xhuy/xhuy)
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default React.memo(Login);
