import { IParamsPage } from "interfaces/common";

export interface PaginationProps {
  className?: string;
  total?: number;
  defaultPageSize?: number;
  defaultCurrent?: number;
  pageSizeOptions?: Array<string> | Array<number>;
  pageSize?: number;
  paramsPage: IParamsPage;
  setParamsPage: React.Dispatch<React.SetStateAction<IParamsPage>>;
  onChange?: () => void;
}
