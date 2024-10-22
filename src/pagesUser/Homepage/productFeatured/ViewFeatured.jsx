import React, { useContext, useEffect, useState } from "react";
import { SyncDataContext } from "..";
import { useNavigate } from "react-router-dom";

const ShowFeatured = () => {
  const navigate = useNavigate();
  const { featured, loadMorefeatured } = useContext(SyncDataContext);
  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="container-item">
      <div className="px-6 lg:px-0">
        <div className="flex justify-between">
          <div className="tFeature">Sản phẩm nổi bật</div>
          <a
            href="/san-pham-theo-loai/noi-bat"
            className="btn-discover"
            target="blank"
          >
            Khám phá
          </a>
        </div>
        <div className="mb-4">
          Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
        </div>
      </div>
      <div className="grid">
        {featured.map((item, index) => (
          <a
            key={index}
            onClick={() => {
              navigate(`/chi-tiet-san-pham`, {
                state: { id: item.id, slug: item.slug },
              });
            }}
          >
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
        <button onClick={loadMorefeatured} className="btn-more">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default ShowFeatured;
