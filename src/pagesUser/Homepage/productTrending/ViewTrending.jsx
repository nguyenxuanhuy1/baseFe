import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowTrending = () => {
  const { trending, loadMore } = useContext(SyncDataContext);

  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="w-full">
      <div className="px-6 lg:px-0">
        <div className="flex justify-between">
          <h4>Sản phẩm nổi bật</h4>
          <a href="">Khám phá</a>
        </div>
        <div className="mb-4">Danh sách theo sản phẩm có thể bạn sẽ thích</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0">
        {trending.map((item, index) => (
          <div key={index} className="product-item">
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="product-image"
              alt={item.text}
            />
            <p>{item.name}</p>
            <div className="flex my-2">
              <div className="font-semibold">
                {item.price.toLocaleString()}đ
              </div>
              <div className="font-semibold px-2 line-through opacity-50">
                {item.originalPrice.toLocaleString()}
              </div>
              <div className="discount-badge">
                -{calculateDiscountPercentage(item.originalPrice, item.price)}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="load-more-button" onClick={loadMore}>
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default ShowTrending;
