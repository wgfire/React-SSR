//client/app/index.js
//浏览器端页面结构渲染入口

import React from "react";
import ReactDom from "react-dom";
import App from "./app.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import routeList from "../router/route-config";

//渲染路由
ReactDom.hydrate(
  <BrowserRouter context={{ a: "xx" }}>
    <App routeList={routeList} />
  </BrowserRouter>,
  document.getElementById("root")
);
