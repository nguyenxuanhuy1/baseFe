import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, message, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import httpMethod from "services/httpMethod";

const UploadImage = (props: any) => {
  const { form, field, setPath } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = URL.createObjectURL(file.originFileObj as File); // Tạo URL tạm thời cho file
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const CustomRequest = async ({ file, onSuccess, onError }: any) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await httpMethod.post(
        `http://localhost:3001/api/files/upload`,
        formData
      );
      if (response.status === 201) {
        onSuccess(null, file);
        setFileList((prevFileList) => [
          ...prevFileList,
          {
            ...file,
            url: `http://localhost:3001${response.data.path}`, // Lưu URL từ server sau khi upload
          },
        ]);
        setPath(`http://localhost:3001${response.data?.path}`);
      } else {
        onError(new Error("Upload thất bại"));
      }
    } catch (error) {
      console.error("Upload error:", error);
      onError(error);
      message.error("Có lỗi xảy ra khi upload");
    }
  };

  return (
    <>
      <Upload
        customRequest={CustomRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        showUploadList={{ showRemoveIcon: true }}
        beforeUpload={(file) => {
          const fileURL = URL.createObjectURL(file);
          console.log("fileURL", fileURL);

          setFileList((prev) => [
            ...prev,
            {
              uid: file.uid,
              name: file.name,
              status: "done", // Giả sử file đã upload thành công
              url: fileURL, // Thêm URL tạm thời vào fileList
              originFileObj: file, // Lưu file gốc
            },
          ]);
          return false; // Ngừng upload lên server
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>

      {fileList &&
        fileList.map((file: any, index: number) => (
          <div
            key={index}
            style={{
              position: "relative",
              display: "inline-block",
              width: "80px",
              height: "120px", // Đủ chỗ để hiển thị tên ảnh
              textAlign: "center",
            }}
          >
            <Image
              src={`data:image/jpeg;base64,${file.base64}`}
              preview={false}
              style={{
                width: "100%",
                height: "80px", // Đặt chiều cao cố định cho ảnh
                objectFit: "cover",
                border: "1px dashed black",
              }}
            />
            <div style={{ fontSize: "12px", marginTop: "4px" }}>
              {file.name?.length > 10
                ? `${file.name.slice(0, 5)}...${file.name.slice(-4)}`
                : file.name}
            </div>
          </div>
        ))}
    </>
  );
};

export default UploadImage;
