import { Modal } from "antd";

interface IProps {
  open: boolean;
  onCancel: () => void;
}
const Login = (props: IProps) => {
  const { open, onCancel } = props;

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={false}
      width={"68%"}
      //   title="Đăng nhập / đăng kí"
    >
      Đăng nhập/ đăng kí
    </Modal>
  );
};

export default Login;
