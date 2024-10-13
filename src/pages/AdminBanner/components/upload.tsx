import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

// const props: UploadProps = {
//   name: "file",
//   action: "http://localhost:3001/file/upload",
//   headers: {
//     authorization: "authorization-text",
//   },
//   onChange(info) {
//     info.file.response.filename;
//     if (info.file.status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === "done") {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

const UploadF: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => (
  <Upload
    {...{
      name: "file",
      action: "http://localhost:3001/file/upload",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          onChange(info.file.response.filename);
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }}
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export default UploadF;
