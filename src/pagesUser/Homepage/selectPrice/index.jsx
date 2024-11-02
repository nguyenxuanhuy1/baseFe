import { useNavigate } from "react-router-dom";

const ChosePrice = () => {
  const prices = [
    { label: "50.000Đ", value: 50000 },
    { label: "100.000Đ", value: 100000 },
    { label: "200.000Đ", value: 200000 },
    { label: "500.000Đ", value: 500000 },
    { label: "1.000.000Đ", value: 1000000 },
  ];

  const navigate = useNavigate();

  const handleClick = (value) => {
    navigate(`/san-pham-theo-loai`, {
      state: { type: `${"price_to="}${value}` },
    });
  };

  return (
    <div className="chose-price">
      <div className="tFeature">Giá phù hợp</div>
      <div className="choseItem">
        {prices.map((price, index) => (
          <div
            key={index}
            onClick={() => handleClick(price.value)}
            className="priceOption"
          >
            {price.label}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChosePrice;
