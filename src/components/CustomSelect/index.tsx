import { Select as SelectAntd } from "antd";
import { ErrorMessage } from "formik";
import { FunctionComponent } from "react";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import { FieldSelectPropsRoot } from "./Select.interface";

const Select: FunctionComponent<FieldSelectPropsRoot> = ({
  defaultValue,
  value,
  size,
  open,
  options,
  placeholder,
  showArrow,
  status,
  onChange,
  onBlur,
  className,
  form,
  field,
  mode,
  label,
  showSearch,
  onSearch,
  disabled,
  handlePopupScroll,
  suffixIcon,
  isRequired,
  close,
  name,
  setState,
}) => {
  const { errors, touched, setFieldValue = () => {} } = form ?? {};

  const onBlurCustom = () => {
    form?.setTouched({ ...form.touched, [field?.name || ""]: true });
  };

  const handleOnChange = (e: any) => {
    setFieldValue(field?.name || "", e);
    if (setState) {
      setState(e);
    }
  };

  const inputOnChange = onChange || handleOnChange;

  return (
    <div>
      <>
        {label}
        {isRequired ? (
          <span style={{ color: "red", margin: "0 4px" }}>*</span>
        ) : null}
      </>
      <SelectAntd
        onPopupScroll={handlePopupScroll}
        disabled={disabled}
        showSearch={showSearch}
        defaultValue={defaultValue}
        value={value || field?.value}
        size={size}
        open={open}
        mode={mode}
        options={options}
        placeholder={placeholder}
        showArrow={showArrow}
        // status={status}
        onChange={inputOnChange}
        onSearch={onSearch}
        suffixIcon={
          field?.value ? (
            close && (
              <CloseOutlined
                onClick={() => setFieldValue(field?.name || "", "" || null)}
              />
            )
          ) : (
            <DownOutlined />
          )
        }
        status={
          touched?.[field?.name || ""] && errors?.[field?.name || ""]
            ? "error"
            : ""
        }
        className={`custom-select ${className}`}
        onBlur={onBlur || onBlurCustom}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
      />
      {field && touched?.[field?.name || ""] && errors?.[field?.name || ""] && (
        <span className="span_error">
          <ErrorMessage name={field?.name || ""} className="span_error" />
        </span>
      )}
    </div>
  );
};

export default Select;
