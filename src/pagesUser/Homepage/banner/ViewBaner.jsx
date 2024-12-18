import React, { useContext } from "react";
import { SyncDataContext } from "..";
import { useNavigate } from "react-router-dom";

const ShowBanner = () => {
  const { banner } = useContext(SyncDataContext);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0">
        {banner.slice(2, 6).map((item, index) => (
          <div key={index} className="flex justify-center">
            <img
              loading="lazy"
              src={item.image}
              className="h-auto max-h-[145px] w-full max-w-[288px] lg:max-w-[310px] rounded-[6px]"
              alt={item.text}
              onClick={() => {
                window.open(item.href, "_blank", "noopener,noreferrer");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBanner;
