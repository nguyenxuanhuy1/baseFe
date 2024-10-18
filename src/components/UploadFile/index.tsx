import { Upload, Button, Image, message } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

interface AppUploadProps {
  value?: string | null; // Giá trị là link ảnh
  onChange?: (fileUrl: string | null) => void; // Hàm truyền link ảnh về form
  multiple?: boolean;
  accept?: string;
  maxCount?: number;
  disabled?: boolean;
  field?: any;
  form?: any;
}

const AppUpload: React.FC<AppUploadProps> = ({
  value,
  onChange,
  multiple = false,
  accept = "",
  maxCount,
  disabled,
  field,
  form,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const beforeUpload = (file: File) => {
    const isLt50KB = file.size / 1024 < 50;

    if (!isLt50KB) {
      message.error("Ảnh phải nhỏ hơn 50KB!");
      return false;
    }

    const fileUrl = URL.createObjectURL(file);
    setPreviewImage(fileUrl);

    if (onChange) {
      onChange(fileUrl);
    }

    form.setFieldValue(field.name, file);

    return false;
  };

  // Xóa ảnh
  const handleDeleteImage = () => {
    setPreviewImage(null);
    if (onChange) {
      onChange(null);
    }
    form.setFieldValue(field.name, null);
  };

  useEffect(() => {
    if (value) {
      setPreviewImage(value);
    } else {
      setPreviewImage(null);
    }
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Upload
          multiple={multiple}
          accept={accept || ".png,.jpg,.jpeg"}
          maxCount={maxCount}
          beforeUpload={beforeUpload}
          showUploadList={false}
          className="upload_antd_customs"
        >
          <Button disabled={disabled} icon={<UploadOutlined />}>
            Chọn ảnh{" "}
          </Button>
        </Upload>
        <div
          style={{ fontSize: "12px", fontStyle: "italic", color: "#292D32" }}
        >
          Kích thước tệp tin tối đa: 50KB
        </div>
      </div>
      {previewImage && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image src={previewImage} preview={false} width={"50%"} />
          {!disabled && (
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={handleDeleteImage}
              style={{ color: "red", marginTop: "8px" }}
            >
              Xóa ảnh
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppUpload;
