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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await httpMethod.get(
  //         "https://divineshop.vn/api/home/banners"
  //       );

  //       setData(response.data.list);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const fetchData = async (values) => {
    try {
      const response = await httpMethod.get(
        `https://divineshop.vn/api/home/banners${values.content}/${values.danhmuc}`
      );
      setData(response.data.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fakeOptions = [
    { value: "option1", label: "Tùy chọn 1" },
    { value: "option2", label: "Tùy chọn 2" },
    { value: "option3", label: "Tùy chọn 3" },
    { value: "option4", label: "Tùy chọn 4" },
  ];

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
                <Col xs={24} sm={12} md={4}>
                  <Field
                    component={Input}
                    label="cột 1"
                    name="content"
                    placeholder="Thông tin phản ánh"
                  />
                </Col>
                <Col xs={24} sm={12} md={4}>
                  <Field
                    component={Select}
                    options={fakeOptions}
                    label="Ơ sao méo tháy nhỉ"
                    name="danhmuc"
                    placeholder="Ơ sao méo tháy nhỉ"
                  />
                </Col>

                <Col xs={12} sm={8} md={4}>
                  <Field
                    component={Select}
                    options={fakeOptions}
                    name="danhmuc"
                    placeholder="Chọn cột 3"
                  />
                </Col>
                <Col xs={12} sm={8} md={4}>
                  <Field
                    component={Select}
                    options={fakeOptions}
                    name="danhmuc"
                    placeholder="Chọn cột 4"
                  />
                </Col>
                <Col xs={24} sm={8} md={4}>
                  <Field
                    component={Select}
                    options={fakeOptions}
                    name="danhmuc"
                    placeholder="Chọn cột 5"
                  />
                </Col>

                <ButtonFilter htmlType={ButtonHTMLTypes.Submit} />
              </Row>
            </Form>

            {/* <div className="typeproduct-image">
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
            </div> */}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PageTypeProduct;
