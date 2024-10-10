import React from "react";

export interface TableWrapperProps {
  hiddenRowSelection?: boolean;
  columns?: any;
  data?: any;
  rowClassName?: any;
  scroll?: { x?: string | number; y?: string | number };
  setSelectedRowKeys?: React.Dispatch<React.SetStateAction<React.Key[]>>;
  selectedRowKeys?: React.Key[];
  setItemTarget?: React.Dispatch<React.SetStateAction<any>>;
  itemTarget?: any;
  getCheckboxProps?: any;
  style?: React.CSSProperties;
  onChange?: any;
  classNames?: string;
}
