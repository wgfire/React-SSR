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
console.log(window._store_, "window");
//渲染路由
ReactDom.render(
  <Provider store={store(window._store_)}>
    <BrowserRouter context={{ a: "xx" }}>
      <App routeList={routeList} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
