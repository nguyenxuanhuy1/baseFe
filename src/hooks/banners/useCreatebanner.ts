import { showError, showSuccess } from "helpers/toast";
import { AppContext } from "App";
import { useContext } from "react";
import { dictActions } from "constants/action";
import httpMethod from "services/httpMethod";

const useCreateBanner = () => {
  const { setLoading } = useContext(AppContext);

  const createBanner = async (
    searchForm: any,
    refreshData: () => void,
    setActions: React.Dispatch<React.SetStateAction<dictActions>>,
    setItemTarget: React.Dispatch<any>,
    fileImage: any
  ) => {
    setLoading(true);

    try {
      // const formData = new FormData();
      // formData.append("file", fileImage); // Thêm file vào FormData
      // formData.append("slug", searchForm.slug);
      const response = await httpMethod.post(
        `http://localhost:3001/banners`,
        searchForm
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      if (response.status === 201) {
        if (response.data) {
          showSuccess("Thêm mới thành công !");
          refreshData();
          setActions((prev: any) => {
            return { ...prev, create: false };
          });
        }
        setItemTarget(null);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        showError(error.response?.data?.message[0]);
      } else {
        showError("Có lỗi xảy ra, vui lòng thử lại sau");
      }
    } finally {
      setLoading(false);
    }
  };
  return { createBanner };
};
export default useCreateBanner;
