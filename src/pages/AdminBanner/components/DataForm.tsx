import { useCallback, useContext, useState } from "react";
import { FileContext } from "..";
import { Button, Col, Row, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import Input from "components/CustomField/InputField";
import {
  CloseOutlined,
  CloudUploadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Accept, useDropzone } from "react-dropzone";

function DataForm() {
  const { actions } = useContext(FileContext);
  const isDisabled = actions["create"] || actions["update"] ? false : true;

  const [fileImage, setFileImage] = useState<any | null>(null);
  const [saveFile, setSaveFile] = useState<any | null>(null);
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles) {
      return;
    }
    if (acceptedFiles[0] && acceptedFiles[0].size > 50 * 1024) {
      alert("Ảnh tải lên dung lượng  đã quá 50KB");
      return;
    }

    const file = acceptedFiles[0];
    setSaveFile(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      alert("Ảnh không đúng định dạng .JPEG, .JPG, .PNG");
    }
    setFileImage(acceptedFiles[0]);
  }, []);
  const accept: Accept = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
  };
  const { getInputProps, getRootProps } = useDropzone({
    accept,
    onDrop,
  });
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

          <Col span={24}>
            <div className="flex">
              <div>Logo</div>
              &nbsp;
              <div style={{ color: "red" }}>*</div>
            </div>
            <div
              className="imageAddress p-1 mb-3"
              style={{
                border: "2px dashed #000",
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "not-allowed" : "pointer",
              }}
            >
              <div
                className="flex w-[100%] justify-around p-1"
                {...(!isDisabled ? getRootProps() : {})}
              >
                <input accept="image/*" type="file" {...getInputProps()} />
                <div
                  className="mr-2 flex h-12 w-12 items-center justify-center"
                  style={{
                    borderRadius: 24,
                    backgroundColor: "#E5F1FF",
                  }}
                >
                  <CloudUploadOutlined
                    style={{
                      color: "#2ED189",
                      fontSize: "22px",
                    }}
                  />
                </div>
                <div className=" w-[90%] items-center">
                  <b>
                    Kéo hoặc{" "}
                    <b
                      role={"button"}
                      style={{
                        color: "#2ED189",
                        textDecorationLine: "underline",
                      }}
                    >
                      Bấm vào đây
                    </b>{" "}
                    để chọn Logo
                  </b>
                  <p>Dung lượng tối đa 50KB</p>
                </div>
              </div>
              {fileImage && (
                <div className="item-support flex w-[100%] justify-around p-1">
                  <div className="mr-2 h-12 w-12 items-center justify-center">
                    <img
                      src={URL.createObjectURL(fileImage)}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="w-[90%] items-center">
                    <b>{fileImage?.name || "Tên ảnh"}</b>
                    <p>{`Dung lượng ${(fileImage.size / 1024).toFixed(
                      2
                    )} KB`}</p>
                  </div>
                  <div
                    role={"button"}
                    onClick={() => setFileImage(null)}
                    className="flex h-6 w-6 items-start justify-end"
                  >
                    <CloseOutlined />
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
}
export default DataForm;
