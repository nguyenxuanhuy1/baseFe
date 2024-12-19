import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
interface IProps {
  form?: any;
  field?: any;
  label?: string;
  isRequired?: boolean;
  onChange?: any;
  onlyText?: boolean;
  fixHeight?: number;
  disabled?: boolean;
}

const options = {
  buttonList: [
    ["fontSize"],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["fontColor", "hiliteColor", "textStyle"],
    ["removeFormat"],
    ["outdent", "indent"],
    ["align", "horizontalRule", "list", "lineHeight"],
    ["table", "link", "image"],
    ["showBlocks", "video"],
  ],
  fontSize: [10, 11, 12, 13, 14, 16, 18, 20, 24],
};

const TextEditor = (props: IProps) => {
  const { form, field, label, isRequired, onChange, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;

  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */

  const handleImageUploadBefore = async (
    files: any,
    info: any,
    uploadHandler: any
  ) => {
    const response = {
      result: [
        {
          url: files[0],
          name: files[0].name,
          size: files[0].size,
        },
      ],
    };

    uploadHandler(response);
    return undefined;
  };

  return (
    <>
      {label && (
        <label>
          {label || ""}
          {isRequired && <span className="required text-red-500">*</span>}
        </label>
      )}
      <SunEditor
        name={name}
        setContents={value}
        autoFocus={false}
        onChange={onChange || field.onChange}
        setOptions={options}
        height="80px"
        onImageUpload={(e) => {}}
        disable={disabled}
      />
      {touched[name] && errors[name] && (
        <div className="err-text" style={{ color: "red" }}>
          {errors[name]}
        </div>
      )}
    </>
  );
};

export default TextEditor;
