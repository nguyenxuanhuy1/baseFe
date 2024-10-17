import { Modal } from "antd";
import React from "react";
import { IModalConfirm } from "../ModalBasic/interface";
import { ButtonCreate, ButtonDelete } from "../../Button";

const ModalConfirm = (props: IModalConfirm) => {
  //! define
  const { open, onCancel, onOk, title, footer, content, closeIcon, icon } =
    props;
  const isMobile = window.innerWidth <= 768;
  console.log("isMobile", isMobile);

  const customFooter = (
    <div style={{ textAlign: "center" }}>
      <ButtonCreate title="Xác nhận" onClick={onOk} />
      <ButtonDelete title="Huỷ" onClick={onCancel} />
    </div>
  );

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      title={title || "Thông báo"}
      footer={customFooter || footer}
      closeIcon={false}
      className="modal-confirm"
      // width={400}
      width={isMobile ? "100%" : 400}
      centered={true}
      // maskClosable={false}
      // mask={false}
    >
      <div className="modal-confirm-content">
        {icon}
        {content}
      </div>
    </Modal>
  );
};

export default ModalConfirm;
