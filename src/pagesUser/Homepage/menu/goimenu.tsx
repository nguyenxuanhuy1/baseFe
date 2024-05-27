import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowMenu = () => {
  const { menu } = useContext(SyncDataContext);
  return (
    <div>
      <ul>
        {menu.map((menuItem: any, index: number) => (
          <li key={index}>{menuItem.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowMenu;
