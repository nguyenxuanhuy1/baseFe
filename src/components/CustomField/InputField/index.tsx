import { Input as InputAntd } from "antd";
import { ErrorMessage } from "formik";
import InputProps from "./interface";

const Input = ({
  allowClear,
  name,
  size,
  type,
  value,
  onChange,
  placeholder,
  className,
  form,
  onBlur,
  disabled,
  label,
  isRequired,
  prefix,
  suffix,
  id,
  min,
  onClick,
  maxLength,
  defaultValue,
  style,
  bordered,
  showCount,
  ...props
}: InputProps<any, any>) => {
  const inputName = name || props?.field?.name || "";
  const inputValue = value || props.field?.value;
  const inputOnChange = onChange || props.field?.onChange;

  const inputOnBlur = onBlur || props.field?.onBlur;
  const { errors, touched } = form ?? {};

  return (
    <div className="wrap-input" style={{ position: "relative" }}>
      <InputAntd
        allowClear={allowClear}
        defaultValue={defaultValue}
        autoComplete="off"
        id={id}
        name={inputName}
        disabled={disabled}
        size={size}
        type={type}
        value={inputValue}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
        onClick={onClick}
        placeholder={placeholder}
        className={`custom-input ${className}`}
        style={style || { color: "#495057", padding: "20px 10px" }} // Điều chỉnh padding
        prefix={prefix}
        suffix={suffix}
        status={touched?.[inputName] && errors?.[inputName] ? "error" : ""}
        min={min}
        maxLength={maxLength}
        bordered={bordered}
        showCount={showCount}
      />
      <label
        className={`placeholder ${inputValue ? "filled" : ""}`} // Thêm class để điều chỉnh hiệu ứng
      >
        {placeholder}
      </label>
      {touched?.[inputName] && errors?.[inputName] && (
        <span className="span_error">
          <ErrorMessage name={inputName || ""} />
        </span>
      )}
    </div>
  );
};

export default Input;
