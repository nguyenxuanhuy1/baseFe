import { useContext, useEffect, useState } from "react";
import { FileContext } from "..";
import { Col, Row, Tag } from "antd";
import { Field, Form, Formik } from "formik";
import Input from "components/CustomField/InputField/inputPro";
import { ButtonCreate, ButtonDelete } from "components/Button";
import { ButtonHTMLTypes } from "interfaces/common";
import useUpdateSector from "hooks/HooksForAdmin/Product/Update";
import useCreateSector from "hooks/HooksForAdmin/Product/Create";
import { validation } from "../helper/validation";
import { initialValuesData } from "../helper/initialValues";
import AppUpload from "components/UploadFile";
import Select from "components/CustomSelect";

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
  const [path, setPath] = useState<string>("");
  const optionSlug = [
    { label: "Slide", value: "slide" },
    { label: "Banner", value: "banner" },
  ];

  return (
    <Formik
      onSubmit={(values) => {
        if (actions["create"]) {
          createSector(
            {
              ...values,
              slide: [path],
              image: path,
              meta: { path },
              options: [path],
              tags: ["tạm fix cứng", "tag2"],
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
      initialValues={initialValuesData}
      validationSchema={validation}
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
          <Col span={12}>
            <Field
              component={Input}
              name="price"
              placeholder="Nhập giá ban đầu"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={12}>
            <Field
              component={Input}
              name="originalPrice"
              placeholder="Nhập giá sau khi giảm"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Input}
              name="name"
              placeholder="Nhập tên sản phẩm"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={Select}
              name="slug"
              options={optionSlug}
              placeholder="Chọn loại"
              disabled={actions["create"] || actions["update"] ? false : true}
            />
          </Col>
          <Col span={24}>
            <Field
              component={AppUpload}
              name="pathImage"
              placeholder="Nhập name"
              setPath={setPath}
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
