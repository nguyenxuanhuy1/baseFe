import React from "react";
// import { Size, SelectStatus } from "interfaces/index";
import { FormikState, FormikHelpers, FieldInputProps } from "formik";
import { SelectStatus, Size } from "interfaces/common";

interface FieldSelectProps {
  defaultValue?: string | null | undefined;
  value?: string | null | undefined;
  size?: Size;
  open?: boolean;
  options?: { label: string; value: any }[];
  placeholder?: React.ReactNode;
  showArrow?: boolean;
  status?: SelectStatus;
  mode?: "multiple" | "tags" | undefined;
  onChange?: (value: string) => void;
  className?: string;
  form?: FormikHelpers<any> & FormikState<any>;
  field?: FieldInputProps<any>;
  label?: string | React.ReactNode;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
  isRequied?: boolean;
  disabled?: boolean;
  handlePopupScroll?: any;
  idSectors?: number;
  idRecordType?: number;
  suffixIcon?: React.ReactNode;
  isRequired?: boolean;
  name?: string;
  idTinh: number;
  idHuyen: number;
  unitID?: number;
  typeAll?: any;
  setState?: any;
  type?: number;
  userType?: number;
  recordsTypeId: number;
  recordsType?: number;

  checkTypeAdmin?: number;
  checkTypeDepartment?: boolean;
  dataUserDetail?: any;
  diaChinhId: any;
  area: any;
  close?: boolean;
}
export interface FieldSelectPropsRoot {
  defaultValue?: string | null | undefined;
  value?: string | null | undefined;
  size?: Size;
  open?: boolean;
  options?: { label: string; value: any }[];
  placeholder?: React.ReactNode;
  showArrow?: boolean;
  status?: SelectStatus;
  mode?: "multiple" | "tags" | undefined;
  onChange?: (value: any) => void;
  onBlur?: any;
  className?: string;
  form?: FormikHelpers<any> & FormikState<any>;
  field?: FieldInputProps<any>;
  label?: string | React.ReactNode;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
  isRequied?: boolean;
  disabled?: boolean;
  handlePopupScroll?: any;
  setState?: any;
  suffixIcon?: React.ReactNode;
  isRequired?: boolean;
  name?: string;
  close?: boolean;
  colSpan?: any;
}
export default FieldSelectProps;

export interface FieldSelectDocs {
  defaultValue?: string | null | undefined;
  value?: string | null | undefined;
  size?: Size;
  open?: boolean;
  options?: { label: string; value: any }[];
  placeholder?: React.ReactNode;
  showArrow?: boolean;
  status?: SelectStatus;
  mode?: "multiple" | "tags" | undefined;
  onChange?: (value: string) => void;
  className?: string;
  form?: FormikHelpers<any> & FormikState<any>;
  field?: FieldInputProps<any>;
  label?: string | React.ReactNode;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
  disabled?: boolean;
  suffixIcon?: React.ReactNode;
  isRequired?: boolean;
  name?: string;
  recordsTypes: string;
  sector: string;
  groupDocType: string;
}
