import React, { useContext } from "react";
import { SyncDataContext } from "..";
import { useNavigate } from "react-router-dom";

const ShowGameNewProduct = () => {
  const navigate = useNavigate();
  const { newproduct, loadMoreNewProduct } = useContext(SyncDataContext);

  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="container-item">
      <div className="lg:px-0">
        <div className="flex justify-between">
          <div className="tFeature">Sản phẩm mới</div>
          <a
            className="btn-discover"
            onClick={() => {
              navigate(`/san-pham-theo-loai`, {
                state: { type: "newproduct" },
              });
            }}
          >
            Khám phá
          </a>
        </div>
        <div className="mb-4"></div>
      </div>
      <div className="grid">
        {newproduct.map((item, index) => (
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
              src={
                item.image.startsWith("http")
                  ? item.image
                  : `https://divineshop.vn${item.image}`
              }
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
        <button onClick={loadMoreNewProduct} className="btn-more">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default ShowGameNewProduct;
