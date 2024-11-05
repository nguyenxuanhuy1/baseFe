import { Fragment, useContext } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { FileContext } from "..";
import { Col, Row } from "antd";
import Input from "components/CustomField/InputField/inputPro";
import { ButtonCreate, ButtonDelete, ButtonSearch } from "components/Button";
import { SearchOutlined } from "@ant-design/icons";
import { ButtonHTMLTypes } from "interfaces/common";

function SearchForm() {
  const {} = useContext(FileContext);
  return (
    <Fragment>
      <Formik
        initialValues={{ searchTerm: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(propFormik: FormikProps<any>) => {
          const { values, setFieldValue } = propFormik;
          return (
            <Form>
              <Row>
                <Col span={12}>
                  <Field
                    component={Input}
                    label="Loại sản phẩm"
                    name="code"
                    placeholder="Mã dịch vụ"
                    showSearch
                  />
                </Col>
                <Col span={12}>
                  <Field
                    component={Input}
                    label="Giá sản phẩm"
                    name="price"
                    placeholder="Mã dịch vụ"
                    showSearch
                  />
                </Col>
              </Row>
              <Row className="row-group-button">
                <div className="invisible hidden xl:flex justify-around">
                  <ButtonSearch />
                </div>
                <div className="flex">
                  <ButtonSearch
                    htmlType={ButtonHTMLTypes.Submit}
                    icon={<SearchOutlined />}
                  />
                  <ButtonDelete
                    title="Huỷ tìm kiếm"
                    htmlType={ButtonHTMLTypes.Reset}
                  />
                </div>
                <ButtonCreate onClick={() => {}} />
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}
export default SearchForm;
