import { ButtonHTMLTypes } from "interfaces/common";
import Button from "../CustomButton";
import {
  CloseCircleOutlined,
  FilterOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

interface ButtonProps {
  icon?: React.ReactNode;
  title?: string;
  disable?: boolean;
  onClick?: () => void;
  htmlType?: ButtonHTMLTypes | undefined;
  className?: string;
  disabled?: boolean;
  styles?: React.CSSProperties;
}

export const ButtonCreate = (props: ButtonProps) => {
  const { title, htmlType, onClick, className, icon, disabled } = props;
  return (
    <Button
      title={title || "Thêm mới"}
      className={`${className} btn-group btn-create`}
      icon={icon || <PlusCircleOutlined />}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disabled}
    />
  );
};

export const ButtonDelete = (props: ButtonProps) => {
  const { title, htmlType, onClick, className, icon, disable } = props;
  return (
    <Button
      title={title}
      className={
        disable
          ? `${className} btn-remain-disable`
          : `${className} btn-group btn-delete`
      }
      icon={icon || <CloseCircleOutlined />}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disable}
    />
  );
};

export const ButtonRemain = (props: ButtonProps) => {
  const { title, htmlType, onClick, className, disable, icon } = props;
  return (
    <Button
      title={title}
      disabled={disable}
      className={
        disable ? `${className} btn-remain-disable` : `${className} btn-remain`
      }
      icon={icon || <PlusCircleOutlined />}
      onClick={onClick}
      htmlType={htmlType}
    />
  );
};

export const ButtonSearch = (props: ButtonProps) => {
  const { title, htmlType, onClick, className, icon, disable } = props;
  return (
    <Button
      title={title || "Tìm kiếm"}
      className={
        disable
          ? `${className} btn-remain-disable`
          : `${className} btn-group btn-search`
      }
      icon={icon || <SearchOutlined />}
      disabled={disable}
      onClick={onClick}
      htmlType={htmlType}
    />
  );
};

export const ButtonFilter = (props: ButtonProps) => {
  const { title, htmlType, onClick, className, icon, disable } = props;
  return (
    <Button
      // style={{ marginTop: "1.2rem" }}
      title={title || "Lọc"}
      className={
        disable
          ? `${className} btn-remain-disable`
          : `${className} btn-group btn-filter`
      }
      icon={icon || <FilterOutlined />}
      disabled={disable}
      onClick={onClick}
      htmlType={htmlType}
    />
  );
};

export const ButtonIcon = (props: ButtonProps) => {
  const { icon, onClick, className, disable } = props;
  return (
    <Button
      icon={icon}
      className={`${className} btn-icon`}
      onClick={onClick}
      disabled={disable}
    />
  );
};
