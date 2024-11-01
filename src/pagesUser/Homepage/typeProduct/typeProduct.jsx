import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Field, Form, Formik } from "formik";
import httpMethod from "services/httpMethod";
import { initialValues } from "./helper/inittialValue";
import { ButtonFilter } from "components/Button";
import { ButtonHTMLTypes } from "interfaces/common";
import Input from "components/CustomField/InputField";
import Select from "components/CustomSelect";

const PageTypeProduct = () => {
  const [data, setData] = useState(null);
  const [dataDanhMuc, setDataDanhMuc] = useState([]);
  const [dataTheLoai, setDataTheLoai] = useState([]);
  console.log("dataTheLoai", dataTheLoai);

  // call api danh mục để lấy value và lable
  useEffect(() => {
    const getdataDanhMuc = async () => {
      try {
        const response = await httpMethod.get(
          `https://divineshop.vn/page-data/sq/d/1685146032.json`
        );
        if (response.status === 200) {
          setDataDanhMuc(response?.data?.data?.productCategoryList?.list);
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getdataDanhMuc();
  }, []);

  const opDanhMuc = dataDanhMuc.map((item) => ({
    value: item.value,
    label: item.text,
  }));

  //

  // call api thể loại để lấy value và lable
  useEffect(() => {
    const getdataTheLoai = async () => {
      try {
        const response = await httpMethod.get(
          `https://divineshop.vn/page-data/sq/d/90173942.json`
        );
        if (response.status === 200) {
          setDataTheLoai(response?.data?.data?.productTagList?.list);
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getdataTheLoai();
  }, []);

  const opTheLoai = dataTheLoai?.map((item) => ({
    value: item.text,
    label: item.text,
  }));

  //

  const fetchData = async (values) => {
    let url = "https://divineshop.vn/api/product/list?limit=24&slug=featured";

    if (values.category_id) url += `&${"category_id="}${values.category_id}`;
    if (values.tag) url += `&${"tag="}${values.tag}`;
    if (values.price_from) url += `&${"price_from="}${values.price_from}`;
    if (values.price_to) url += `&${"price_to="}${values.price_to}`;
    if (values.sort) url += `&${"sort="}${values.sort}`;

    try {
      const response = await httpMethod.get(url);
      setData(response?.data?.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(initialValues);
  }, []);

  return (
    <Formik
      onSubmit={(values) => {
        fetchData(values);
      }}
      initialValues={initialValues}
    >
      {({ setFieldValue }) => (
        <div className="container-page-typeproduct">
          <div className="page">
            {/* <div className="title">Sản phẩm nổi bật</div> */}
            <Form>
              <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={5}>
                  <Field
                    component={Select}
                    options={opDanhMuc}
                    name="category_id"
                    placeholder="Danh mục"
                  />
                </Col>
                <Col xs={24} sm={12} md={5}>
                  <Field
                    component={Select}
                    options={opTheLoai}
                    name="tag"
                    placeholder="Thể loại"
                  />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Field
                    type="number"
                    maxLength={9}
                    component={Input}
                    label="Mức giá từ"
                    name="price_from"
                    placeholder="Mức giá từ"
                  />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Field
                    component={Input}
                    label="Mức giá đến"
                    name="price_to"
                    placeholder="Mức giá đến"
                  />
                </Col>
                <Col xs={24} sm={12} md={4}>
                  <Field
                    component={Select}
                    options={opDanhMuc}
                    name="sort"
                    placeholder="Sắp xếp"
                  />
                </Col>

                <ButtonFilter htmlType={ButtonHTMLTypes.Submit} />
              </Row>
            </Form>

            <div className="typeproduct-image">
              {data?.map((item, index) => (
                <a key={index} className="item">
                  <img
                    loading="lazy"
                    src={`https://divineshop.vn${item.image}`}
                    className="it-image"
                    alt={item.text}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PageTypeProduct;
