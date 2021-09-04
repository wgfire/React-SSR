//路由配置文件

import Index, { _GetInitData } from "../pages/index";
import List from "../pages/list";
import About from "../pages/about";

export default [
  {
    path: "/",
    component: Index,
    exact: true,
    initData: _GetInitData,
    storeName: "home",
  },
  {
    path: "/index",
    component: Index,
    exact: true,
    initData: _GetInitData,
    storeName: "home",
  },
  {
    path: "/list",
    component: List,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
];
