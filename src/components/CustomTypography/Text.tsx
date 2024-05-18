import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";

const { Text } = Typography;

const CustomText = (props: TextProps) => {
  //! state
  const { title } = props;

  //! function

  //! useEffect

  //! render
  return <Text {...props}>{title}</Text>;
};

export default CustomText;
