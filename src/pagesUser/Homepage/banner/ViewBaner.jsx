import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowBanner = () => {
  const { banner } = useContext(SyncDataContext);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0">
        {banner.slice(2, 6).map((item, index) => (
          <div key={index} className="flex justify-center">
            <img
              loading="lazy"
              src={`https://divineshop.vn${item.image}`}
              className="h-auto max-h-[145px] w-full max-w-[288px] lg:max-w-[310px] rounded-[6px]"
              alt={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBanner;
