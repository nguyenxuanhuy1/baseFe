import {
  ButtonHTMLTypes,
  ButtonShape,
  ButtonType,
  Size,
} from "interfaces/common";

interface ButtonProps {
  title?: string;
  size?: Size;
  type?: ButtonType | undefined;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean | undefined;
  htmlType?: ButtonHTMLTypes;
  icon?: React.ReactNode;
  shape?: ButtonShape | undefined;
  tooltip?: string;
  style?: React.CSSProperties;
}

export default ButtonProps;
