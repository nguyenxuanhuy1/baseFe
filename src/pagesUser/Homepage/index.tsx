import React, { createContext, lazy, useEffect } from "react";
import useMenu from "hooks/menu/menu";
import SlideComponent from "./slide/ViewSlide";
import useSlide from "hooks/slide/slide";
const ShowMenu = lazy(() => import("./menu/ViewMenu"));

export const SyncDataContext = createContext<any>({
  // listSyncData: [],
  // setSearchForm: () => null,
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
      <div className="content">
        <ShowMenu />
        <SlideComponent />
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
