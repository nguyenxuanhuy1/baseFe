import { CommonIcons } from "components/CommonIcons";
import BaseUrl from "constants/baseUrl";
import React, { Fragment, lazy } from "react";
import { IRoute } from "./interface.router";

// Bash importHere
const DefaultLayout = lazy(() => import("layouts/DefaultLayout"));
const DefaultLayoutUser = lazy(() => import("layouts/DefaultLayoutUser"));
const Login = lazy(() => import("pages/Login"));
const Homepage = lazy(() => import("pages/Homepage"));
const PageUser = lazy(() => import("pagesUser/Homepage"));
const QuanLySanPham = lazy(() => import("pages/AdminProduct"));
const QuanLyBanner = lazy(() => import("pages/AdminBanner"));

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
    ],
  },
];

export default routes;
