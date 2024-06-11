import React, { useContext } from "react";
import { SyncDataContext } from "..";
import { Carousel } from "antd";

const SlideComponent = () => {
  const { slide } = useContext(SyncDataContext);
  return (
    <div>
      <div className="relative w-full h-full">
        <Carousel
          className="custom-carousel"
          pauseOnHover={true}
          draggable
          arrows
        >
          {slide.map((item, index) => (
            <div key={index}>
              <img
                loading="lazy"
                src={`https://divineshop.vn${item.image}`}
                className="h-auto max-h-[510px] lg:max-h-[312px] rounded-[6px]"
                style={{ minWidth: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SlideComponent;
