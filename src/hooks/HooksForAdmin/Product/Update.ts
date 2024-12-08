import { showError, showSuccess } from "helpers/toast";
import httpMethod from "../../../services/httpMethod";
import { AppContext } from "App";
import { useContext } from "react";
import { dictActions } from "constants/action";

const useUpdateSector = () => {
  const { setLoading } = useContext(AppContext);
  const updateSector = async (
    id: number,
    body: any,
    refreshDataSearchDepartment: () => void,
    setActions: React.Dispatch<React.SetStateAction<dictActions>>,
    setItemTarget: React.Dispatch<any>
  ) => {
    if (body) {
      setLoading(true);
      try {
        const response = await httpMethod.patch(
          `http://localhost:3001/api/products/3${id}`,
          body
        );
        if (response.status === 200) {
          showSuccess("Cập nhật thành công!");
          refreshDataSearchDepartment();
          setActions((prev: any) => {
            return { ...prev, update: false };
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
    }
  };
  return { updateSector };
};
export default useUpdateSector;
