//client/app/index.js
//浏览器端页面结构渲染入口

import React from "react";
import ReactDom from "react-dom";
import App from "./app.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import routeList from "../router/route-config";
import { Provider } from "react-redux";

import store from "../../store/index";
// const Store = createStore(reducer);
//渲染路由
ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter context={{ a: "xx" }}>
      <App routeList={routeList} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
