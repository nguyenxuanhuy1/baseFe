import { Radio as RadioAntd, RadioChangeEvent } from "antd";
import { ErrorMessage } from "formik";
import { RadioProps } from "./Radio.interface";

const Radio = ({
  defaultValue,
  disabled,
  isRequired,
  options,
  onChange,
  value,
  optionType,
  buttonStyle,
  title,
  form,
  field,
  name,
}: RadioProps) => {
  const inputName = name || field?.name || "";

  const { errors, touched } = form ?? {};

  const radioValue = field?.value;

  //! fuction
  const handleOnChange = ({ target: { value } }: RadioChangeEvent) => {
    form?.setFieldValue(field?.name || "", value);
  };

  //! render
  return (
    <div
      className="custom-radio"
      // style={disabled ? { display: "none", visibility: "hidden" } : {}}
    >
      <div
        className="radio-title"
        // style={disabled ? { display: "none" } : {}}
      >
        {title}
        {isRequired ? (
          <span style={{ color: "red", margin: "0 4px" }}>*</span>
        ) : null}
      </div>

      <div>
        <RadioAntd.Group
          size="middle"
          defaultValue={defaultValue}
          options={options}
          onChange={onChange || handleOnChange}
          value={value || radioValue}
          optionType={optionType}
          buttonStyle={buttonStyle}
          // style={
          //   disabled
          //     ? { visibility: "hidden" }
          //     : { justifyContent: "space-between" }
          // }
          disabled={disabled}
        />
        <div style={{ marginTop: "18px" }}>
          {touched?.[inputName] && errors?.[inputName] && (
            <span className="span_error">
              <ErrorMessage name={inputName || ""} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Radio;
