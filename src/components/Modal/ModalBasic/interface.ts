import { TypeModal } from "interfaces/common";

export interface IModalBasic {
  open?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  footer?: React.ReactNode;
  content?: string;
  icon?: React.ReactNode;
  className?: string;
  width?: string | number;
  type?: TypeModal;
  closeIcon?: React.ReactNode | null;
}
export interface IModalConfirm {
  open?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  footer?: React.ReactNode;
  content?: string;
  icon?: React.ReactNode;
  className?: string;
  width?: string | number;
  type?: TypeModal;
  closeIcon?: React.ReactNode | null;
}
export interface IModalPreview {
  open?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  footer?: React.ReactNode;
  content?: string;
  icon?: React.ReactNode;
  className?: string;
  width?: string | number;
  type?: TypeModal;
  closeIcon?: React.ReactNode | null;
  file: any;
}

export interface IModalFailureMap {
  open?: any;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  titleHeader?: string;
  footer?: React.ReactNode;
  className?: string;
  width?: string | number;
  content?: string;
}
