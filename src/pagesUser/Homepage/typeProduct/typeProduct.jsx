import React, { useEffect, useState } from "react";
import httpMethod from "services/httpMethod";

const PageTypeProduct = () => {
  const [data, setData] = useState(null);
  console.log(data, "data");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpMethod.get(
          `https://divineshop.vn/api/product/list?id=9793&slug=related`
        );
        const result = await response.json();
        setData(result.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-page-typeproduct">
      <div className="typeproduct-body">
        <div className="item">Sản phẩm 1</div>
        <div className="item">Sản phẩm 2</div>
        <div className="item">Sản phẩm 3</div>
        <div className="item">Sản phẩm 4</div>
        <div className="item">Sản phẩm 5</div>
        <div className="item">Sản phẩm 6</div>
      </div>
    </div>
  );
};

export default PageTypeProduct;
