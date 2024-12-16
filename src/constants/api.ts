export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_URL_DEV = process.env.REACT_APP_BASE_URL_DEV;
export const Header = {
  TOP: `${BASE_URL}/page-data/sq/d/2215486189.json`,
  MID: `${BASE_URL}/page-data/sq/d/2247331527.json`,
  BOT: `${BASE_URL}/page-data/sq/d/401991559.json`,
};
export const Body = {
  MENU: `${BASE_URL}/api/header/menu`,
  SLIDE: `${BASE_URL}/api/home/slide`,
  BANNER: `${BASE_URL}/api/home/banners`,
  // BANNER: `${BASE_URL_DEV}/products/home/banner`,

  TRENDING: `${BASE_URL}/api/product/list?slug=trending`,
  TRENDING1: `${BASE_URL}/api/product/listpage=2?slug=trending`,
  TRENDING2: `${BASE_URL}/api/product/list?page=3sslug=trending`,

  FEATURED: `${BASE_URL}/api/product/list?slug=featured`,
  FEATURED1: `${BASE_URL}/api/product/list?page=2&slug=featured`,
  FEATURED2: `${BASE_URL}/api/product/list?page=3&slug=featured`,

  STEAM: `${BASE_URL}/api/product/list?slug=steam`,
  STEAM1: `${BASE_URL}/api/product/list?page=2&slug=steam`,
  STEAM2: `${BASE_URL}/api/product/list?page=3&slug=steam`,

  NEWPRODUCT: `${BASE_URL}/api/product/list?slug=new-product`,
  NEWPRODUCT1: `${BASE_URL}/api/product/list?page=2&slug=new-product`,
  NEWPRODUCT2: `${BASE_URL}/api/product/list?page=3&slug=new-product`,

  STUDY: `${BASE_URL}/api/product/list?slug=hoc-tap`,
  STUDY1: `${BASE_URL}/api/product/list?page=2slug=hoc-tap`,
  STUDY2: `${BASE_URL}/api/product/list?page=3slug=hoc-tap`,
};
