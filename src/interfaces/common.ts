export interface ResponseGenerator<T = any> {
  config?: any;
  data?: T;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export enum ButtonType {
  Primary = "primary",
  Dashed = "dashed",
  Link = "link",
  Text = "text",
}

export enum TypeTypography {
  Secondary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

export enum ButtonHTMLTypes {
  Submit = "submit",
  Button = "button",
  Reset = "reset",
}

export enum ButtonShape {
  Circle = "circle",
  Round = "round",
  Default = "default",
}

export enum Size {
  Large = "large",
  Middle = "middle",
  Small = "small",
}

export enum SelectStatus {
  Error = "error",
  Warning = "warning",
}

export enum TypeModal {
  Info = "info",
  Success = "success",
  Error = "error",
  Warn = "warn",
  Warning = "warning",
  Confirm = "confirm",
}
export interface IDefaultLayout {
  children: React.ReactNode;
  isNoDefault?: boolean;
}

export interface IParamsPage {
  page: number;
  pageSize: number;
}

export interface IMeta {
  page: number;
  page_of_number: number;
  total: number;
}

export interface IOptions {
  label: string;
  value: number | string;
}
