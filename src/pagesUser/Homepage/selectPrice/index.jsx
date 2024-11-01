import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ChosePrice = () => {
  const prices = [
    { label: "20.000Đ", value: 20000 },
    { label: "50.000Đ", value: 50000 },
    { label: "100.000Đ", value: 100000 },
    { label: "200.000Đ", value: 200000 },
    { label: "500.000Đ", value: 500000 },
    { label: "1.000.000Đ", value: 1000000 },
  ];

  const navigate = useNavigate();

  const handleClick = (value) => {
    navigate(`/san-pham-theo-loai`, {
      state: { selectedPrice: value },
    });
  };

  return (
    <div className="chose-price">
      {prices.map((price, index) => (
        <div
          key={index}
          onClick={() => handleClick(price.value)}
          className="price-option"
          style={{
            cursor: "pointer",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "5px",
          }}
        >
          {price.label}
        </div>
      ))}
    </div>
  );
};
export default ChosePrice;
