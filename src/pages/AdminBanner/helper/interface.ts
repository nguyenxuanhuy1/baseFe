import { dictActions } from "constants/action";
import { IParamsPage } from "interfaces/common";

export interface IFile {
  setParamsPage: (e: any) => void;
  paramsPage: IParamsPage;
  dataTable: any[];
  setSearchForm: (e: IInitialValuesSearchForm) => void;
  searchForm: IInitialValuesSearchForm;
  formikRef: any;
  actions: dictActions;
  setActions: React.Dispatch<React.SetStateAction<dictActions>>;
  refreshData: () => void;
  setItemTarget: React.Dispatch<any>;
  itemTarget: any;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isClick?: boolean;
  setIsClick?: any;
}

export interface IInitialValuesSearchForm {
  slug: string | null;
}
