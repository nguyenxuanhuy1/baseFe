import React, { useContext } from "react";
import { SyncDataContext } from "..";
import { RiseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const ShowTrending = () => {
  const navigate = useNavigate();
  const { trending, loadMoreTrending } = useContext(SyncDataContext);
  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="layout-trending container-item">
      <div className="px-6 lg:px-0">
        <div className="flex justify-between">
          <div className="i-trending">
            <div className="icRise">
              <RiseOutlined />
            </div>
            <div className="t-trend">#Sản phẩm bán chạy nhất</div>
          </div>
          <a
            href=""
            className="btn-discover"
            onClick={() => {
              navigate(`/san-pham-theo-loai`, {
                state: { type: "trending" },
              });
            }}
          >
            Khám phá
          </a>
        </div>
      </div>
      <div className="grid">
        {trending.map((item, index) => (
          <a key={index} className="product-item">
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="it-image"
              alt={item.text}
            />
            <p>{item.name}</p>
            <div className="show-price">
              <div className="price">{item.price.toLocaleString()}đ</div>
              {item.originalPrice !== item.price && (
                <>
                  <div className="origin-price">
                    {item.originalPrice.toLocaleString()}đ
                  </div>
                  <div className="discountpercen">
                    -
                    {calculateDiscountPercentage(
                      item.originalPrice,
                      item.price
                    )}
                    %
                  </div>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
      <div className="l-more">
        <button onClick={loadMoreTrending} className="btn-more">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default ShowTrending;
