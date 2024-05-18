import { Input as InputAntd } from "antd";
import { ErrorMessage } from "formik";
import { IPropsTextArea } from "./TextAreaField.interfaces";

const TextArea = ({
  name,
  form,
  field,
  disabled,
  autoSize,
  className,
  maxLength,
  onChange,
  placeholder,
  label,
  isRequied,
  rows,
  value,
}: IPropsTextArea) => {
  //! define
  const { TextArea } = InputAntd;
  const { errors, touched } = form ?? {};

  const inputName = name || field?.name || "";

  const inputValue = value || field?.value;

  //! render
  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        {label ? `${label}${isRequied ? `(*)` : ""}` : ""}
      </div>

      <TextArea
        name={inputName}
        disabled={disabled}
        autoSize={autoSize}
        value={inputValue}
        className={`custom-textarea ${className}`}
        maxLength={maxLength}
        onChange={onChange || field?.onChange}
        placeholder={placeholder}
        rows={rows}
      />
      {touched?.[inputName] && errors?.[inputName] && (
        <span className="span_error">
          <ErrorMessage name={inputName || ""} />
        </span>
      )}
    </>
  );
};

export default TextArea;
