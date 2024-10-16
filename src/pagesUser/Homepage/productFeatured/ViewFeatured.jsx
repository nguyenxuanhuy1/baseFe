import React, { useContext, useEffect, useState } from "react";
import { SyncDataContext } from "..";
import { useNavigate } from "react-router-dom";

const ShowFeatured = () => {
  const navigate = useNavigate();
  const {
    featured,
    loadMorefeatured,
    // setProductId,
    // setProductSlug,
    // productId,
  } = useContext(SyncDataContext);
  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="container-item">
      <div className="px-6 lg:px-0">
        <div className="flex justify-between">
          <div className="tFeature">Sản phẩm nổi bật</div>
          <a href="" className="btn-discover">
            Khám phá
          </a>
        </div>
        <div className="mb-4">
          Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
        </div>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0"> */}
      <div className="grid">
        {featured.map((item, index) => (
          <a
            key={index}
            onClick={() => {
              navigate(`/chi-tiet-san-pham`);
            }}
          >
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="it-image"
              alt={item.text}
              onClick={() => {
                localStorage.setItem("productId", item.id);
                localStorage.setItem("productSlug", item.slug);
              }}
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
        <button onClick={loadMorefeatured} className="btn-more">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default ShowFeatured;
