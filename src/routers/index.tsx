import { CommonIcons } from "components/CommonIcons";
import BaseUrl from "constants/baseUrl";
import React, { Fragment, lazy } from "react";
import { IRoute } from "./interface.router";

// Bash importHere
const DefaultLayout = lazy(() => import("layouts/DefaultLayout"));
const DefaultLayoutUser = lazy(() => import("layouts/DefaultLayoutUser"));
const Login = lazy(() => import("pages/Login"));
const Homepage = lazy(() => import("pages/Homepage"));
const PageUser = lazy(() => import("pagesUser/Homepage/index"));
const QuanLySanPham = lazy(() => import("pages/AdminProduct"));
const QuanLyBanner = lazy(() => import("pages/AdminBanner"));
const Details = lazy(() => import("pagesUser/Homepage/pageDetails/details"));
const Cart = lazy(() => import("pagesUser/Homepage/cart/cart"));
const PageTypeProduct = lazy(
  () => import("pagesUser/Homepage/typeProduct/typeProduct")
);
const Recuitment = lazy(
  () => import("pagesUser/Homepage/recruitment/ShowRecruitment")
);
const ShowIdentifi = lazy(
  () => import("pagesUser/Homepage/identification/ViewIdentifi")
);
const routes: IRoute[] = [
  {
    name: "Login",
    key: "login",
    path: BaseUrl.Login,
    layout: Fragment,
    component: Login,
    routeChild: [],
  },
  {
    name: "pageUser",
    key: "pageUser",
    path: BaseUrl.Pageuser,
    layout: DefaultLayoutUser,
    component: PageUser,
    routeChild: [],
  },
  {
    name: "HomePage",
    key: "home",
    path: BaseUrl.Homepage,
    layout: DefaultLayout,
    isPrivateRoute: true,
    component: Homepage,
    icon: <CommonIcons.BarChartOutlined />,
    routeChild: [],
  },

  {
    name: "Quản lý",
    key: "manage",
    path: BaseUrl.Homepage,
    layout: DefaultLayout,
    isPrivateRoute: true,
    component: null,
    icon: <CommonIcons.ProductOutlined />,
    routeChild: [
      {
        name: "Quản lý sản phẩm",
        key: "manageProduct",
        path: BaseUrl.ManageProduct,
        layout: DefaultLayout,
        component: QuanLySanPham,
        isPrivateRoute: true,
        routeChild: [],
      },
      {
        name: "Quản lý banner",
        key: "manageBanner",
        path: BaseUrl.manageBanner,
        layout: DefaultLayout,
        component: QuanLyBanner,
        isPrivateRoute: true,
        routeChild: [],
      },
      {
        name: "Xem lịch sử các đơn hàng",
        key: "history",
        path: BaseUrl.manageBanner,
        layout: DefaultLayout,
        component: QuanLyBanner,
        isPrivateRoute: true,
        routeChild: [],
      },
    ],
  },
  {
    name: "details",
    key: "details",
    path: BaseUrl.pageDetails,
    layout: DefaultLayoutUser,
    component: Details,
    routeChild: [],
  },
  {
    name: "cart",
    key: "cart",
    path: BaseUrl.cart,
    layout: DefaultLayoutUser,
    component: Cart,
    routeChild: [],
  },
  {
    name: "sản phẩm theo loại",
    key: "cart",
    path: BaseUrl.productType,
    layout: DefaultLayoutUser,
    component: PageTypeProduct,
    routeChild: [],
  },
  {
    name: "Tuyển dụng",
    key: "recuitment",
    path: BaseUrl.recuitment,
    layout: DefaultLayoutUser,
    component: Recuitment,
    routeChild: [],
  },
  {
    name: "Nhận diện",
    key: "identifi",
    path: BaseUrl.identifi,
    layout: DefaultLayoutUser,
    component: ShowIdentifi,
    routeChild: [],
  },
];

export default routes;
