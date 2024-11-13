import { FieldInputProps, FormikHelpers, FormikState } from "formik";

export interface ICustomUpload {
  label: string;
  field?: FieldInputProps<any>;
  form?: FormikHelpers<any> & FormikState<any>;
  name?: string;
  onChange?: (e: any) => void;
  isRequired?: boolean;
  disabled?: boolean;
  value?: any;
  accept?: string;
  onRemove?: any;
}
