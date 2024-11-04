import React, { createContext, lazy, useState } from "react";
import useMenu from "hooks/menu/menu";
import SlideComponent from "./slide/ViewSlide";
import useSlide from "hooks/slide/slide";
import useBanner from "hooks/banners/useGetBanner";
import useFeatured from "hooks/featured/featured";
import useTrending from "hooks/trending/trending";
import useSteam from "hooks/steam/steam";
import useNewProduct from "hooks/newproduct/newproduct";
import useStudy from "hooks/study/study";

const ShowMenu = lazy(() => import("./menu/ViewMenu"));
const ShowBanner = lazy(() => import("./banner/ViewBaner"));
const ShowFeatured = lazy(() => import("./productFeatured/ViewFeatured"));
const ShowTrending = lazy(() => import("./productTrending/ViewTrending"));
const ChosePrice = lazy(() => import("./selectPrice"));
const ShowGameSteam = lazy(() => import("./productgameSteam/ShowGameSteam"));
const ShowGameNewProduct = lazy(() => import("./newProduct/ShowNewProduct"));
const ShowStudy = lazy(() => import("./study/ShowStudy"));

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
  const { data: steam, loadMoreSteam } = useSteam();
  const { data: newproduct, loadMoreNewProduct } = useNewProduct();
  const { data: study, loadMoreStudy } = useStudy();
  return (
    <SyncDataContext.Provider
      value={{
        menu,
        slide,
        banner,
        trending,
        featured,
        steam,
        newproduct,
        study,

        loadMoreStudy,
        loadMoreSteam,
        loadMoreTrending,
        loadMorefeatured,
        loadMoreNewProduct,
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

        <div>
          {/* <div className="pageChildren80">
            <ChosePrice />
          </div> */}

          <div className="pageChildren80">
            <ShowGameSteam />
          </div>
          <div className="pageChildren80">
            <ShowGameNewProduct />
          </div>
          <div className="pageChildren80">
            <ShowStudy />
          </div>
        </div>
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
