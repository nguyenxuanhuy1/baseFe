import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowBanner = () => {
  const { banner } = useContext(SyncDataContext);

  return (
    <div className="flex">
      <div className="lg:w-1/2 flex flex-col">
        {banner.slice(2, 6).map((item, index) => (
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
    </div>
  );
};
export default ShowBanner;
