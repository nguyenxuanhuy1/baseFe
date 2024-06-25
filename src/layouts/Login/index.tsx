import { Modal } from "antd";

interface IProps {
  open: boolean;
  onCancel: () => void;
}
const Login = (props: IProps) => {
  const { open, onCancel } = props;

  return (
    <Modal
      open={!!open}
      onCancel={onCancel}
      footer={false}
      width={"68%"}
      //   title="Đăng nhập / đăng kí"
    >
      đây là form đăng nhập
    </Modal>
  );
};

export default Login;
