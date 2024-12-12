import { Modal, Upload, message } from "antd";
import React, { Fragment, useState } from "react";
import { ICustomUpload } from "./interface";
import { ErrorMessage } from "formik";
// import { getBase64 } from "../../utils/getBase64";

const CustomUpload = (props: ICustomUpload) => {
  //! define
  const {
    label,
    field,
    form,
    name,
    onChange,
    isRequired,
    value,
    disabled,
    accept,
  } = props;

  const uploadName = name || field?.name || "";

  const { errors, touched } = form ?? {};

  //! state
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");

  //! function
  const uploadButton = (
    <div>
      <div
        style={{
          marginTop: 8,
          width: "100px",
        }}
      >
        Upload
      </div>
    </div>
  );
  const handleChange = (info: any) => {
    console.log("info", info);

    const { fileList } = info;

    // Reset thumbUrl of removed files
    const updatedFileList = fileList.map((file: any) => {
      if (file.status === "removed") {
        return {
          ...file,
          thumbUrl: "",
        };
      }
      return file;
    });

    form?.setFieldValue(field?.name || "", updatedFileList);

    if (onChange) {
      onChange(info);
    }
  };

  //! useEffect

  //! render
  return (
    <Fragment>
      <span className="text-[14px] font-[400] mb-[4px] ">{label}</span>

      {isRequired && (
        <span
          style={{ color: "red", margin: "0 4px" }}
          className=" items-center"
        >
          *
        </span>
      )}
      <Upload
        name={uploadName}
        listType="picture-card"
        fileList={value || field?.value || []}
        onChange={onChange || handleChange}
        disabled={disabled}
        accept={accept}
        beforeUpload={(file) => {
          const isJPG =
            file.type === "image/jpeg" ||
            file.type === "image/png" ||
            file.type === "image/jpg";
          if (!isJPG) {
            message.error("Bạn chọn sai định dạng file!");
          }
          return false;
        }}
        showUploadList={{ showPreviewIcon: false }}
      >
        {(form?.values[field?.name || ""] || field?.value)?.length > 0
          ? null
          : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={""}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
      {touched?.[uploadName] && errors?.[uploadName] && (
        <span className="text-[red]">
          <ErrorMessage name={uploadName || ""} />
        </span>
      )}
    </Fragment>
  );
};

export default CustomUpload;
