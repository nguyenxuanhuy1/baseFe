import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowTrending = () => {
  const { trending } = useContext(SyncDataContext);
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
          <div key={index}>
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="h-auto max-h-[145px] w-full max-w-[288px] lg:max-w-[310px] rounded-[6px]"
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
              <div className="text-white font-semibold bg-red-500 rounded-[20%]">
                -{calculateDiscountPercentage(item.originalPrice, item.price)}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="jflex justify-center">
        <div className="text-center text-xl text-blue-500">Xem thêm</div>
      </div>
    </div>
  );
};

export default ShowTrending;
