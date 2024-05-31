import React, { createContext, useContext } from "react";
import { SyncDataContext } from "..";

const SlideComponent = () => {
  const { slide } = useContext(SyncDataContext);
  return <div>đây là slide</div>;
};

export default SlideComponent;
