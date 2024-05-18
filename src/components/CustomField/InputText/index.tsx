import { Col, Input as InputAntd, Row } from "antd";
import { ErrorMessage } from "formik";
import InputProps from "../InputField/interface";

const InputText = ({
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
  colSpan,
  ...props
}: InputProps<any, any>) => {
  const inputName = name || props?.field?.name || "";
  const inputValue = value || props.field?.value;
  const inputOnChange = onChange || props.field?.onChange;

  const inputOnBlur = onBlur || props.field?.onBlur;
  const { errors, touched } = form ?? {};

  return (
    <Row style={{ display: "flex", alignItems: "center" }}>
      <Col span={colSpan[0]}>
        <div>
          {label}
          {isRequired ? (
            <span style={{ color: "red", margin: "0 4px" }}>*</span>
          ) : null}
        </div>
      </Col>
      <Col span={colSpan[1]} style={{ paddingLeft: "16px" }}>
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
          style={
            style || {
              color: "#495057",
              padding: 0,
              margin: "5px 0",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              pointerEvents: "none",
            }
          }
          prefix={prefix}
          suffix={suffix}
          status={touched?.[inputName] && errors?.[inputName] ? "error" : ""}
          min={min}
          maxLength={maxLength}
          bordered={false}
          showCount={showCount}
        />
      </Col>
      {touched?.[inputName] && errors?.[inputName] && (
        <span className="span_error">
          <ErrorMessage name={inputName || ""} />
        </span>
      )}
    </Row>
  );
};

export default InputText;
