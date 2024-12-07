import { showError, showSuccess } from "helpers/toast";
import httpMethod from "../../../services/httpMethod";
import { useContext } from "react";
import { AppContext } from "App";
import { dictActions } from "constants/action";

const useCreateSector = () => {
  const { setLoading } = useContext(AppContext);

  const createSector = async (
    searchForm: any,
    refreshData: () => void,
    setActions: React.Dispatch<React.SetStateAction<dictActions>>,
    setItemTarget: React.Dispatch<any>
  ) => {
    setLoading(true);
    try {
      const response = await httpMethod.post(
        `http://localhost:3001/api/products`,
        searchForm
      );
      if (response.status === 200) {
        showSuccess("Thêm mới thành công !");
        refreshData();
        setActions((prev: any) => {
          return { ...prev, create: false };
        });
        setItemTarget(null);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        showError(error.response?.data?.message);
      } else {
        showError("Có lỗi xảy ra, vui lòng thử lại sau");
      }
    } finally {
      setLoading(false);
    }
  };

  return { createSector };
};

export default useCreateSector;
