import * as Yup from "yup";
export const validation = Yup.object().shape({
  parentId: Yup.string().required("Đây là trường bắt buộc nhập"),
  categoryId: Yup.string().required("Đây là trường bắt buộc nhập"),
  name: Yup.string().required("Đây là trường bắt buộc nhập"),
  slug: Yup.string().required("Đây là trường bắt buộc nhập"),
  meta: Yup.string().required("Đây là trường bắt buộc nhập"),
  options: Yup.string().required("Đây là trường bắt buộc nhập"),
  tags: Yup.string().required("Đây là trường bắt buộc nhập"),
  originalPrice: Yup.string().required("Đây là trường bắt buộc nhập"),
  price: Yup.string().required("Đây là trường bắt buộc nhập"),
  status: Yup.string().required("Đây là trường bắt buộc nhập"),
  pathImage: Yup.string().required("Đây là trường bắt buộc nhập"),
});
