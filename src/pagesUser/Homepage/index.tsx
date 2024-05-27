import React, { createContext, useEffect, useState } from "react";
import useMenu from "hooks/menu/menu";
import ShowMenu from "./menu/goimenu";

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
      <ShowMenu />
    </SyncDataContext.Provider>
  );
};

export default Menu;
