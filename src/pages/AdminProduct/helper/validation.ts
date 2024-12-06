import * as Yup from "yup";
export const validation = Yup.object().shape({
  contentProcess: Yup.string().required("Vui lòng nhập nội dung xử lý!"),
});
