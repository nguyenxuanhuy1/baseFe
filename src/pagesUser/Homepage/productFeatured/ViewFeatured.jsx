import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowFeatured = () => {
  const { featured, loadMorefeatured } = useContext(SyncDataContext);
  const calculateDiscountPercentage = (originalPrice, price) => {
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="container-featured">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0">
        {featured.map((item, index) => (
          <a key={index}>
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="h-auto max-h-[145px] w-full max-w-[288px] lg:max-w-[310px] rounded-[6px]"
              alt={item.text}
            />
            <p>{item.name}</p>
            <div className="flex flex-wrap my-2">
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
        <button onClick={loadMorefeatured} className="btn-more">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default ShowFeatured;
