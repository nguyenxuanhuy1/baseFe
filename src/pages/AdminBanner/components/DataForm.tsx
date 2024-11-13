import { useContext, useEffect } from "react";
import { FileContext } from "..";
import { Col, Row } from "antd";
import { Field, Form, Formik } from "formik";
import Input from "components/CustomField/InputField/inputPro";
import { ButtonCreate, ButtonDelete } from "components/Button";
import { ButtonHTMLTypes } from "interfaces/common";
import { initialValuesDataForm } from "../helper/inittialValue";
import useCreateBanner from "hooks/banners/useCreatebanner";
import AppUpload from "components/UploadFile";
function DataForm() {
  const {
    actions,
    setActions,
    setItemTarget,
    refreshData,
    itemTarget,
    formikRef,
  } = useContext(FileContext);

  const { createBanner } = useCreateBanner();
  useEffect(() => {
    formikRef.current?.handleReset();
  }, [actions["create"]]);

  useEffect(() => {
    if (itemTarget) {
      formikRef.current?.setValues({
        ...itemTarget,
      });
    }
  }, [itemTarget, !actions["update"]]);

  useEffect(() => {
    if (actions["delete"]) formikRef.current?.handleReset();
  }, [actions["delete"]]);

  return (
    <Formik
      onSubmit={(values) => {
        if (actions["create"]) {
          createBanner(
            {
              ...values,
            },
            refreshData,
            setActions,
            setItemTarget
          );
        }
        formikRef.current.resetForm({ values: initialValuesDataForm });
      }}
      initialValues={initialValuesDataForm}
      innerRef={formikRef}
    >
      <Form>
        <Row>
          <Col span={24}>
            <Field
              component={Input}
              label="Loại sản phẩm"
              name="slug"
              placeholder="Nhập loại"
              disabled={actions["create"] || actions["update"] ? false : true}
              isRequired
            />
          </Col>
          <Col span={24}>
            <Field
              component={AppUpload}
              label="Loại sản phẩm"
              name="file"
              disabled={actions["create"] || actions["update"] ? false : true}
              isRequired
            />
          </Col>
        </Row>
        {(actions["create"] || actions["update"]) && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ButtonCreate title="Lưu" htmlType={ButtonHTMLTypes.Submit} />
            <ButtonDelete
              title="Huỷ"
              htmlType={ButtonHTMLTypes.Submit}
              onClick={() =>
                setActions((prev: any) => {
                  return { ...prev, create: false, update: false };
                })
              }
            />
          </div>
        )}
      </Form>
    </Formik>
  );
}
export default DataForm;
