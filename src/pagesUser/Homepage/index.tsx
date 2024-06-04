import React, { createContext, lazy } from "react";
import useMenu from "hooks/menu/menu";
import SlideComponent from "./slide/ViewSlide";
import useSlide from "hooks/slide/slide";
import useBanner from "hooks/banners/banner";
import ShowBanner from "./banner/ViewBaner";
const ShowMenu = lazy(() => import("./menu/ViewMenu"));

export const SyncDataContext = createContext<any>({});

const Menu = () => {
  const { data: menu } = useMenu();
  const { data: slide } = useSlide();
  const { data: banner } = useBanner();
  return (
    <SyncDataContext.Provider
      value={{
        menu,
        slide,
        banner,
      }}
    >
      <div className="flex w-full justify-center flex-row">
        <div className="flex" style={{ maxWidth: "80%", background: "black" }}>
          <div className="w-full  hidden lg:block" style={{ minWidth: "19%" }}>
            <ShowMenu />
          </div>
          <div className="h-full w-full flex-row flex">
            <div className="h-full w-full lg:w-53/100 mx-6">
              <SlideComponent />
            </div>
            <div className="w-full lg:w-1/4 hidden lg:flex flex-col">
              {banner.slice(0, 2).map((item, index) => (
                <div key={index}>
                  <img
                    loading="lazy"
                    src={`https://divineshop.vn${item.image}`}
                    className="h-auto max-h-[143px] w-auto lg:max-w-[310px] mb-6"
                    alt={item.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
