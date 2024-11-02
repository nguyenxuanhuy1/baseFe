import React, { createContext, lazy, useState } from "react";
import useMenu from "hooks/menu/menu";
import SlideComponent from "./slide/ViewSlide";
import useSlide from "hooks/slide/slide";
import useBanner from "hooks/banners/useGetBanner";
import useFeatured from "hooks/featured/featured";
import useTrending from "hooks/trending/trending";
import ChosePrice from "./selectPrice";
import ShowGameSteam from "./gameSteam/ShowGameSteam";

const ShowMenu = lazy(() => import("./menu/ViewMenu"));
const ShowBanner = lazy(() => import("./banner/ViewBaner"));
const ShowFeatured = lazy(() => import("./productFeatured/ViewFeatured"));
const ShowTrending = lazy(() => import("./productTrending/ViewTrending"));
const Details = lazy(() => import("./pageDetails/details"));

export const SyncDataContext = createContext({
  setProductId: () => {},
  setProductSlug: () => {},
});

const Menu = () => {
  const { data: menu } = useMenu();
  const { data: slide } = useSlide();
  const { data: banner } = useBanner();
  const { data: featured, loadMorefeatured } = useFeatured();
  const { data: trending, loadMoreTrending } = useTrending();

  return (
    <SyncDataContext.Provider
      value={{
        menu,
        slide,
        banner,
        trending,
        featured,

        loadMoreTrending,
        loadMorefeatured,
      }}
    >
      <div className="containerPageUser">
        <div className="pageChildren80">
          <div className="cssMenu">
            <ShowMenu />
          </div>
          <div className="containerSlider">
            <div className="cssSlider">
              <SlideComponent />
            </div>
            <div className="imageBanner">
              {banner.slice(0, 2).map((item, index) => (
                <div key={index}>
                  <img
                    loading="lazy"
                    src={`https://divineshop.vn${item.image}`}
                    className="image"
                    alt={item.text}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="cssBanner">
            <ShowBanner />
          </div>
          <div className="cssFeatured">
            <ShowFeatured />
          </div>
        </div>

        <div className="background-div">
          <div className="cssTrending">
            <ShowTrending />
          </div>
        </div>

        <div className="pageChildren80">
          <ChosePrice />
        </div>

        <div className="pageChildren80">
          <ShowGameSteam />
        </div>
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
