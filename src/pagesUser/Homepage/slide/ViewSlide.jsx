import React, { useContext } from "react";
import { SyncDataContext } from "..";
import { Carousel } from "antd";

const SlideComponent = () => {
  const { slide } = useContext(SyncDataContext);
  console.log("slide", slide);

  return (
    <div>
      <div className="relative w-full h-full">
        <Carousel
          autoplay
          className="custom-carousel"
          pauseOnHover={true}
          draggable
          arrows
        >
          {slide.map((item, index) => (
            <div key={index}>
              <img
                loading="lazy"
                src={item.image}
                className="h-auto max-h-[474px] lg:max-h-[312px] rounded-[6px] min-w-[100%]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SlideComponent;
