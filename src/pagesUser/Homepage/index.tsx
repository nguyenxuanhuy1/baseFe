import React, { createContext, lazy, useEffect } from "react";
import useMenu from "hooks/menu/menu";
import SlideComponent from "./slide/ViewSlide";
import useSlide from "hooks/slide/slide";
const ShowMenu = lazy(() => import("./menu/ViewMenu"));

export const SyncDataContext = createContext<any>({
});

const Menu = () => {
  const { data: menu } = useMenu();
  const { data: slide } = useSlide();

  return (
    <SyncDataContext.Provider
      value={{
        menu,
        slide,
      }}
    >
      <div className="flex w-full h-auto">
        <div className="max-w-1/5"><ShowMenu /></div>
        <div className="h-full w-9/20"><SlideComponent /></div>
        <div className="w-2/5">
          <div className="w h-40 bg-blue-500">
          </div></div>
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
