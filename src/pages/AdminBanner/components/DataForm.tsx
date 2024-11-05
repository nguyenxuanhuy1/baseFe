import { useCallback, useContext, useEffect, useState } from "react";
import { FileContext } from "..";
import { Button, Col, Row, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import Input from "components/CustomField/InputField/inputPro";
import {
  CloseOutlined,
  CloudUploadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Accept, useDropzone } from "react-dropzone";
import { ButtonCreate, ButtonDelete } from "components/Button";
import { ButtonHTMLTypes } from "interfaces/common";
import { initialValuesDataForm } from "../helper/inittialValue";
import useCreateBanner from "hooks/banners/useCreatebanner";
import AppUpload from "components/UploadFile";
// import UploadF from "./upload";
function DataForm() {
  const {
    actions,
    setActions,
    setItemTarget,
    refreshData,
    itemTarget,
    formikRef,
  } = useContext(FileContext);
  const isDisabled = actions["create"] || actions["update"] ? false : true;

  // const [fileImage, setFileImage] = useState<any | null>(null);
  // const [image, setImage] = useState<string | null>(null);

  const { createBanner } = useCreateBanner();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles) {
      return;
    }
    if (acceptedFiles[0] && acceptedFiles[0].size > 50 * 50 * 1024) {
      alert("Ảnh tải lên dung lượng  đã quá 50KB");
      return;
    }
    const file = acceptedFiles[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      alert("Ảnh không đúng định dạng .JPEG, .JPG, .PNG");
    }
    // setFileImage(acceptedFiles[0]);
  }, []);
  const accept: Accept = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
  };
  const { getInputProps, getRootProps } = useDropzone({
    accept,
    onDrop,
  });

  // useEffect
  useEffect(() => {
    formikRef.current?.handleReset();
  }, [actions["create"]]);

  useEffect(() => {
    if (itemTarget) {
      formikRef.current?.setValues({
        ...itemTarget,
        // fileImage: itemTarget?.image,
      });
    }
  }, [itemTarget, !actions["update"]]);

  useEffect(() => {
    if (actions["delete"]) formikRef.current?.handleReset();
  }, [actions["delete"]]);
  // end useEffect

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
          // setFileImage(null);
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
              placeholder="Nhập loại"
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
                  // setFileImage(null);
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
