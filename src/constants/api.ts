export const BASE_URL = process.env.REACT_APP;

export const Header = {
  TOP: `https://divineshop.vn/page-data/sq/d/2215486189.json`,
  MID: `https://divineshop.vn/page-data/sq/d/2247331527.json`,
  BOT: `https://divineshop.vn/page-data/sq/d/401991559.json`,
};
export const Body = {
  MENU: `https://divineshop.vn/api/header/menu`,
  SLIDE: `https://divineshop.vn/api/home/slide`,
  BANNER: `https://divineshop.vn/api/home/banners`,

  TRENDING: `https://divineshop.vn/api/product/list?slug=trending`,
  TRENDING1: `https://divineshop.vn/api/product/listpage=2?slug=trending`,
  TRENDING2: `https://divineshop.vn/api/product/list?page=3sslug=trending`,

  FEATURED: `https://divineshop.vn/api/product/list?slug=featured`,
  FEATURED1: `https://divineshop.vn/api/product/list?page=2&slug=featured`,
  FEATURED2: `https://divineshop.vn/api/product/list?page=3&slug=featured`,

  STEAM: `https://divineshop.vn/api/product/list?slug=steam`,
  STEAM1: `https://divineshop.vn/api/product/list?page=2&slug=steam`,
  STEAM2: `https://divineshop.vn/api/product/list?page=3&slug=steam`,

  NEWPRODUCT: `https://divineshop.vn/api/product/list?slug=new-product`,
  NEWPRODUCT1: `https://divineshop.vn/api/product/list?page=2&slug=new-product`,
  NEWPRODUCT2: `https://divineshop.vn/api/product/list?page=3&slug=new-product`,
};
