import { Modal } from "antd";
import React from "react";
import { IModalBasic } from "./interface";
import { ExclamationCircleFilled } from "@ant-design/icons";

const ModalBasic = (props: IModalBasic) => {
  const { open, onCancel, onOk, title, footer, content, closeIcon } = props;
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      title={title}
      footer={footer}
      closeIcon={closeIcon}
      maskClosable={false}
      mask={false}
    >
      {content}
    </Modal>
  );
};

export default ModalBasic;
