import { Fragment, useContext } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { FileContext } from "..";
import { Col, Row } from "antd";
import Input from "components/CustomField/InputField";
import { ButtonCreate, ButtonDelete, ButtonSearch } from "components/Button";
import { SearchOutlined } from "@ant-design/icons";
import { ButtonHTMLTypes } from "interfaces/common";
import { initialValueSearchForm } from "../helper/inittialValue";

function SearchForm() {
  const { setSearchForm, setItemTarget, setActions, setIsClick, actions } =
    useContext(FileContext);
  return (
    <Fragment>
      <Formik
        onSubmit={(values) => {
          setIsClick(true);
          setSearchForm({
            ...values,
          });
        }}
        initialValues={initialValueSearchForm}
      >
        {(propFormik: FormikProps<any>) => {
          const { values, setFieldValue } = propFormik;
          return (
            <Form>
              <Row>
                <Col span={12}>
                  <Field
                    component={Input}
                    label="Sản phẩm"
                    name="slug"
                    placeholder="Nhập slug"
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
                    onClick={() => setSearchForm(initialValueSearchForm)}
                    disable={actions["create"]}
                  />
                </div>
                <ButtonCreate
                  onClick={() => {
                    setItemTarget(null);
                    setActions((prev: any) => {
                      return { ...prev, create: true };
                    });
                  }}
                />
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}
export default SearchForm;
