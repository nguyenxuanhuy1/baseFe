import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowMenu = () => {
  const { menu } = useContext(SyncDataContext);

  return (
    <div className="w-[232px] bg-[#fff] rounded-[3px]">
      {menu.map((menuItem: any, index: number) => (
        <a
          key={index}
          href={menuItem.link}
          className="flex items-center text-center no-underline pt-1 pb-1 pl-8 hover:bg-gray-200"
        >
          <img
            loading="lazy"
            src={`https://divineshop.vn${menuItem.icon}`}
            style={{ maxHeight: "18px", maxWidth: "21px" }}
            alt={menuItem.text}
          />
          <span style={{ marginLeft: "5px" }}>{menuItem.text}</span>{" "}
        </a>
      ))}
    </div>
  );
};
export default ShowMenu;
