import React, { useContext } from "react";
import { SyncDataContext } from "..";
import { RiseOutlined } from "@ant-design/icons";
const ShowTrending = () => {
  const { trending, loadMoreTrending } = useContext(SyncDataContext);
  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="layout-trending">
      <div className="px-6 lg:px-0">
        <div className="flex justify-between">
          <div className="i-trending">
            <div className="icRise">
              <RiseOutlined />
            </div>
            <div className="t-trend">#Sản phẩm bán chạy nhất</div>
          </div>
          <a href="" className="btn-discover">
            Khám phá
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0">
        {trending.map((item, index) => (
          <a key={index} className="product-item">
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="product-image"
              alt={item.text}
            />
            <p>{item.name}</p>
            <div className="flex flex-wrap my-2 ">
              <div className="font-semibold">
                {item.price.toLocaleString()}đ
              </div>
              {item.originalPrice !== item.price && (
                <>
                  <div className="font-semibold px-2 line-through opacity-50">
                    {item.originalPrice.toLocaleString()}đ
                  </div>
                  <div className="font-semibold bg-red-500 rounded-[10%]">
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
