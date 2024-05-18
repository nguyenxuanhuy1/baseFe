import { Typography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";

const { Paragraph } = Typography;

const CustomParagraph = (props: ParagraphProps) => {
  //! state
  const { title } = props;

  //! function

  //! useEffect

  //! render
  return <Paragraph {...props}>{title}</Paragraph>;
};

export default CustomParagraph;
