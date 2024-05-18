import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

const { Title } = Typography;

const CustomTitle = (props: TitleProps) => {
  //! state
  const { title } = props;

  //! render
  return <Title {...props}>{title}</Title>;
};

export default CustomTitle;
