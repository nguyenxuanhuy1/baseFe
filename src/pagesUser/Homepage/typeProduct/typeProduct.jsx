import React, { useEffect, useState } from "react";
import { Col } from "antd";
import Select from "components/CustomSelect";
import { Field, Form, Formik } from "formik";
import httpMethod from "services/httpMethod";
import { initialValues } from "./helper/inittialValue";
import { ButtonCreate, ButtonSearch } from "components/Button";
import { ButtonHTMLTypes } from "interfaces/common";

const PageTypeProduct = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpMethod.get(
          "https://divineshop.vn/api/home/banners"
        );

        setData(response.data.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const fakeOptions = [
    { value: "option1", label: "Tùy chọn 1" },
    { value: "option2", label: "Tùy chọn 2" },
    { value: "option3", label: "Tùy chọn 3" },
    { value: "option4", label: "Tùy chọn 4" },
  ];

  return (
    <Formik
      onSubmit={(values) => {
        console.log("valuue submit", values);
      }}
      initialValues={initialValues}
    >
      {({ setFieldValue }) => (
        <div className="container-page-typeproduct">
          <div className="page80">
            <div>---------------abc-------------</div>
            <Form>
              <Col span={8}>
                <Field name="danhmuc">
                  {({ field }) => (
                    <Select
                      {...field}
                      options={fakeOptions}
                      onChange={(value) => {
                        setFieldValue("danhmuc", value);
                        console.log("Selected value:", value);
                      }}
                      placeholder="Danh sách Auth"
                    />
                  )}
                </Field>
              </Col>
              <Col span={8}>
                <Field name="danhmuc">
                  {({ field }) => (
                    <Select
                      {...field}
                      options={fakeOptions}
                      onChange={(value) => {
                        setFieldValue("danhmuc", value);
                        console.log("Selected value:", value);
                      }}
                      placeholder="Danh sách Auth"
                    />
                  )}
                </Field>
              </Col>
              <Col span={8}>
                <Field name="danhmuc">
                  {({ field }) => (
                    <Select
                      {...field}
                      options={fakeOptions}
                      onChange={(value) => {
                        setFieldValue("danhmuc", value);
                        console.log("Selected value:", value);
                      }}
                      placeholder="Danh sách Auth"
                    />
                  )}
                </Field>
              </Col>
              <Col span={8}>
                <Field name="danhmuc">
                  {({ field }) => (
                    <Select
                      {...field}
                      options={fakeOptions}
                      onChange={(value) => {
                        setFieldValue("danhmuc", value);
                        console.log("Selected value:", value);
                      }}
                      placeholder="Danh sách Auth"
                    />
                  )}
                </Field>
              </Col>
            </Form>

            <ButtonSearch htmlType={ButtonHTMLTypes.Submit} />
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
