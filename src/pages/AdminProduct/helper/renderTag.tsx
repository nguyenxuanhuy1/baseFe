import { Tag } from "antd";

export const renderStatus = (status: string) => {
  switch (status) {
    case "IN_STOCK":
      return (
        <Tag color="#2579F2" className="tag-table">
          Còn hàng
        </Tag>
      );
    case "OUT_OF_STOCK":
      return (
        <Tag color="#E42428" className="tag-table">
          Hết hàng
        </Tag>
      );
    default:
      return "";
  }
};
