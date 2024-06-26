import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowMenu = () => {
  const { menu } = useContext(SyncDataContext);

  return (
    <div className="show-menu">
      {menu.map((menuItem: any, index: number) => (
        <a key={index} href={menuItem.link} className="item-image">
          <img
            className="ic-img-menu"
            loading="lazy"
            src={`https://divineshop.vn${menuItem.icon}`}
            alt={menuItem.text}
          />
          <span className="sp-menu">{menuItem.text}</span>
        </a>
      ))}
    </div>
  );
};
export default ShowMenu;
