import { CommonIcons } from "components/CommonIcons";
import BaseUrl from "constants/baseUrl";
import React, { Fragment, lazy } from "react";

// Bash importHere
const DefaultLayout = lazy(() => import("layouts/DefaultLayout"));
const DefaultLayoutUser = lazy(() => import("layouts/DefaultLayoutUser"));
const Login = lazy(() => import("pages/Login"));
const Homepage = lazy(() => import("pages/Homepage"));
const Settings = lazy(() => import("pages/Settings"));
const PageUser = lazy(() => import("pagesUser/Homepage"));
export interface IRoute {
  name: string;
  key: string;
  path: string;
  isPrivateRoute?: boolean;
  layout:
    | React.LazyExoticComponent<React.MemoExoticComponent<any>>
    | React.ExoticComponent<any>
    | typeof React.Component;
  component: typeof React.Component | React.FC | null;
  icon?: React.ReactNode;
  routeChild: {
    name: string;
    path: string;
    layout:
      | React.LazyExoticComponent<React.MemoExoticComponent<any>>
      | React.ExoticComponent<any>
      | typeof React.Component;
    component: typeof React.Component | React.FC;
    isPrivateRoute?: boolean;
    key: string;
    routeChild: any;
    icon?: React.ReactNode;
  }[];
}

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
    icon: <CommonIcons.AppstoreOutlined />,
    routeChild: [],
  },
  {
    name: "Settings",
    key: "settings",
    path: BaseUrl.Settings,
    layout: DefaultLayout,
    isPrivateRoute: true,
    component: null,
    icon: <CommonIcons.SettingOutlined />,
    routeChild: [
      {
        name: "Settings Account",
        key: "accsettings",
        path: BaseUrl.SettingsAcc,
        layout: DefaultLayout,
        component: Settings,
        isPrivateRoute: true,
        routeChild: [],
      },
      {
        name: "Settings System",
        key: "syssettings",
        path: BaseUrl.SettingsAcc,
        layout: DefaultLayout,
        component: Settings,
        isPrivateRoute: true,
        routeChild: [],
      },
    ],
  },
];

export default routes;
