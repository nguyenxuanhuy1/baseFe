import { useContext } from "react";
import { FileContext } from "..";
import { Col, Row } from "antd";
import { Field, Form, Formik } from "formik";
import Input from "components/CustomField/InputField";

function DataForm() {
  const {} = useContext(FileContext);
  return (
    <Formik
      initialValues={{ searchTerm: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Row>
          <Col span={24}>
            <Field
              component={Input}
              label="RedirectUrl"
              name="redirectUrl"
              placeholder="Nhập redirectUrl"
              //   disabled={actions["create"] || actions["update"] ? false : true}
              isRequired
            />
          </Col>
        </Row>
      </Form>
    </Formik>
  );
}
export default DataForm;
