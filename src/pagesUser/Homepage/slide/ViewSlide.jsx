import React, { useContext, useRef } from "react";
import { SyncDataContext } from "..";
import { Button, Carousel } from "antd";

const SlideComponent = () => {
  const { slide } = useContext(SyncDataContext);
  const ref = useRef();
  return (
    <div >
      <div style={{ with: '100%', height: '100%' }} className="relative">
        <Carousel autoplay pauseOnHover={true} draggable ref={ref}>
          {
            slide.map((item, index) => (
              <div key={index} >
                <img
                  loading="lazy"
                  src={`https://divineshop.vn${item.image}`}
                  className="h-full w-full"
                  alt='lỗi image'
                />
              </div>
            ))
          }
        </Carousel>
        <span onClick={() => { ref.current.next() }}
          className="absolute top-1/2 transform -translate-y-1/2 left-0"
        >Tiếp</span>
        <span onClick={() => { ref.current.prev() }}
          className="absolute top-1/2 transform -translate-y-1/2 right-0"
        >Lui</span>
      </div>
    </div>
  );
};

export default SlideComponent;
