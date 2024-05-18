import { CheckboxOptionType } from "antd";
import { FieldInputProps, FormikHelpers, FormikState } from "formik";

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export interface RadioProps {
  disabled?: boolean;
  isRequired?: boolean;
  options?: Array<CheckboxOptionType | string | number>;
  onChange?: (e: RadioChangeEvent) => void;
  defaultValue?: any;
  value?: any;
  optionType?: "default" | "button";
  buttonStyle?: "outline" | "solid";
  title?: string;
  field?: FieldInputProps<any>;
  form?: FormikHelpers<any> & FormikState<any>;
  name?: string;
}
