import { Typography } from "antd";
import { LinkProps } from "antd/es/typography/Link";

const { Link } = Typography;

const CustomText = (props: LinkProps) => {
  //! state
  const { title } = props;

  //! function

  //! useEffect

  //! render
  return <Link {...props}>{title}</Link>;
};

export default CustomText;
