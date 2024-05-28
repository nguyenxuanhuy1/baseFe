import React, { createContext, lazy, useEffect } from "react";
import useMenu from "hooks/menu/menu";
const ShowMenu = lazy(() => import("./menu/ViewMenu"));

export const SyncDataContext = createContext<any>({
  listSyncData: [],
  setSearchForm: () => null,
});

const Menu = () => {
  const { data: menu, refresh } = useMenu({});
  useEffect(() => {
    refresh();
  }, []);
  return (
    <SyncDataContext.Provider
      value={{
        menu,
      }}
    >
      <div className="content">
        <ShowMenu />
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
