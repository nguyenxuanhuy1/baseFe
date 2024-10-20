import React, { createContext, lazy, useState } from "react";
import useMenu from "hooks/menu/menu";
import SlideComponent from "./slide/ViewSlide";
import useSlide from "hooks/slide/slide";
import useBanner from "hooks/banners/useGetBanner";
import useFeatured from "hooks/featured/featured";
import useTrending from "hooks/trending/trending";

const ShowMenu = lazy(() => import("./menu/ViewMenu"));
const ShowBanner = lazy(() => import("./banner/ViewBaner"));
const ShowFeatured = lazy(() => import("./productFeatured/ViewFeatured"));
const ShowTrending = lazy(() => import("./productTrending/ViewTrending"));
const Details = lazy(() => import("./pageDetails/details"));

export const SyncDataContext = createContext({
  // productSlug: null,
  // productId: null,
  setProductId: () => {},
  setProductSlug: () => {},
});

const Menu = () => {
  const { data: menu } = useMenu();
  const { data: slide } = useSlide();
  const { data: banner } = useBanner();
  const { data: featured, loadMorefeatured } = useFeatured();
  const { data: trending, loadMoreTrending } = useTrending();

  // const [productId, setProductId] = useState(null);
  // const [productSlug, setProductSlug] = useState(null);

  return (
    <SyncDataContext.Provider
      value={{
        menu,
        slide,
        banner,
        trending,
        featured,
        // productId,
        // productSlug,

        loadMoreTrending,
        loadMorefeatured,
        // setProductId,
        // setProductSlug,
      }}
    >
      <div className="flex w-full justify-center flex-wrap">
        <div className="flex flex-wrap w-full xl:max-w-[1200px]">
          <div className="hidden lg:block cssMenu w-[19%]">
            <ShowMenu />
          </div>
          <div className="flex flex-wrap flex-row w-full pr-[47px] lg:pr-0 lg:w-[80%]">
            <div className="h-full w-full lg:w-[67%] mx-6 lg:max-h-[486px]">
              <SlideComponent />
            </div>
            <div className="w-full lg:w-1/4 hidden lg:flex flex-col">
              {banner.slice(0, 2).map((item, index) => (
                <div key={index}>
                  <img
                    loading="lazy"
                    src={`https://divineshop.vn${item.image}`}
                    className="h-auto max-h-[143px] w-auto lg:min-w-[281px] mb-6  rounded-[6px]"
                    alt={item.text}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full mx-6 xl:mx-0 justify-center flex-wrap">
            <ShowBanner />
          </div>
          <div className="flex w-full mx-6 xl:mx-0  justify-center flex-wrap mt-6">
            <ShowFeatured />
          </div>
        </div>
        <div className="flex w-full justify-center background-div flex-wrap mt-6 bg-[#000d21] h-auto">
          <div className="mx-6 xl:mx-0 xl:max-w-[1200px]">
            <ShowTrending />
          </div>
        </div>
      </div>
    </SyncDataContext.Provider>
  );
};

export default Menu;
