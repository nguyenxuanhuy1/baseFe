import React, { createContext, lazy, useEffect } from "react";
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
      <div className="flex w-full h-full">
        <div className="w-full lg:w-4/21 hidden lg:block">
          <ShowMenu />
        </div>
        <div className="h-full w-full lg:w-27/50 mx-6">
          <SlideComponent />
        </div>
        <div className="w-6/25 hidden lg:block">
          <ShowBanner />
        </div>
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
