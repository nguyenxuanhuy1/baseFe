import { useContext, useEffect } from "react";
import { FileContext } from "..";
import { Col, Row } from "antd";
import { Field, Form, Formik } from "formik";
import Input from "components/CustomField/InputField/inputPro";
import { ButtonCreate, ButtonDelete } from "components/Button";
import { ButtonHTMLTypes } from "interfaces/common";
import Select from "components/CustomSelect";
import useUpdateSector from "hooks/HooksForAdmin/Product/Update";
import useCreateSector from "hooks/HooksForAdmin/Product/Create";

function DataForm() {
  const {
    actions,
    setActions,
    formikRef,
    itemTarget,
    refreshData,
    setItemTarget,
  } = useContext(FileContext);

  useEffect(() => {
    formikRef.current.handleReset();
  }, [actions["create"]]);

  useEffect(() => {
    if (actions["delete"]) formikRef.current.handleReset();
  }, [actions["delete"]]);

  useEffect(() => {
    if (itemTarget) {
      formikRef.current.setValues({
        ...itemTarget,
      });
    }
  }, [itemTarget, !actions["update"]]);
  const { createSector } = useCreateSector();
  const { updateSector } = useUpdateSector();
  return (
    <Formik
      initialValues={{ searchTerm: "" }}
      onSubmit={(values) => {
        if (actions["create"]) {
          createSector(
            {
              ...values,
            },
            refreshData,
            setActions,
            setItemTarget
          );
        }
        if (actions["update"]) {
          updateSector(
            itemTarget.id,
            {
              ...values,
            },
            refreshData,
            setActions,
            setItemTarget
          );
        }
      }}
      innerRef={formikRef}
    >
      <Form>
        <Row gutter={[5, 10]}>
          <Col span={24}>
            <div className="title-dataForm">
              {actions["create"] && <strong>Thêm mới</strong>}
              {actions["update"] && <strong>Cập nhật</strong>}
              {!actions["create"] && !actions["update"] && (
                <strong>Chi tiết</strong>
              )}
            </div>
          </Col>
          <Col span={12}>
            <Field
              component={Input}
              name="parentId"
              placeholder="Nhập parentId"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={12}>
            <Field
              component={Input}
              name="categoryId"
              placeholder="Nhập categoryId"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="image"
              placeholder="Nhập image Url"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="slide"
              placeholder="Nhập slide"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="name"
              placeholder="Nhập name"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="slug"
              placeholder="Nhập slug"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Select}
              mode="tags"
              name="meta"
              placeholder="Nhập meta"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="options"
              placeholder="Nhập options"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="tags"
              placeholder="Nhập tags"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>

          <Col span={24}>
            <Field
              component={Input}
              name="redirectUrl"
              placeholder="Nhập redirectUrl"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={12}>
            <Field
              component={Input}
              name="originalPrice"
              placeholder="Nhập originalPrice"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={12}>
            <Field
              component={Input}
              name="price"
              placeholder="Nhập price"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="status"
              placeholder="Nhập status"
              disabled={actions["create"] || actions["update"] ? false : true}
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
