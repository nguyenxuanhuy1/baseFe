import { showError, showSuccess } from "helpers/toast";
import { AppContext } from "App";
import { useContext } from "react";
import { dictActions } from "constants/action";
import httpMethod from "services/httpMethod";

const useDeleteBanner = () => {
  const { setLoading } = useContext(AppContext);

  const deleteBanner = async (
    id: number,
    refreshData: () => void,
    setActions: React.Dispatch<React.SetStateAction<dictActions>>,
    setItemTarget: React.Dispatch<any>,
    setOpenModalDelete: (value: React.SetStateAction<boolean>) => void
  ) => {
    if (id) {
      setLoading(true);
      try {
        const response = await httpMethod.post(
          `http://localhost:3001/banners/delete/${id}`,
          {}
        );
        if (response.status === 200) {
          showSuccess(response?.data?.message || "Xóa thành công!");
          refreshData();
          setActions((prev: any) => {
            return { ...prev, delete: false };
          });
          setItemTarget(null);
          setOpenModalDelete(false);
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
  return { deleteBanner };
};
export default useDeleteBanner;
