import React, { useContext } from "react";
import { SyncDataContext } from "..";

const ShowBanner = () => {
  const { menu } = useContext(SyncDataContext);
  return <div>đây là ban ner nè</div>;
};
export default ShowBanner;
