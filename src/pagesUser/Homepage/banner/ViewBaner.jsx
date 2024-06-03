import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowBanner = () => {
  const { banner } = useContext(SyncDataContext);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Hiển thị 2 phần tử đầu tiên theo chiều dọc */}
      <div className="lg:w-1/2 flex flex-col">
        {banner.slice(0, 2).map((item, index) => (
          <div key={index}>
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="h-auto max-h-[145px] lg:min-w-[300px] mb-6"
              alt={item.text}
            />
          </div>
        ))}
      </div>
      {/* <div className="lg:w-1/2 flex lg:flex-row flex-col">
        {banner.slice(2).map((item, index) => (
          <div key={index} className="lg:w-1/4">
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="h-auto max-h-[145px] lg:min-w-[300px] mb-6"
              alt={item.text}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default ShowBanner;
