// /src/server/middlewares/react-ssr.js
import Layout from "../../client/app/layout"; //如果有 layout 组件，也需要一起转换为 html
//完成 react ssr 工作的中间件
//引入Index 组件
import fs from "fs";
import paths from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { matchRoute } from "../utils/index";
import { StaticRouter } from "react-router-dom";
import routeList from "../../client/router/route-config";
import { useSelector } from "react-redux";
import App from "../../client/app/app";
import getStore from "../../store/index";
import { Provider } from "react-redux";
const store = getStore()
let state = store.getState()

export default (req, res, next) => {
  const path = req.path;
  let context = { css: [], initData: null };

  let targetRoute = matchRoute(req, routeList);
  if (targetRoute) {
    state[targetRoute.storeName].data = targetRoute.initData();
    console.log(state[targetRoute.storeName],'x');
  }

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={context}>
        <App routeList={routeList}></App>
      </StaticRouter>
    </Provider>
  );

  const cssStr = context.css.length ? context.css.join("\n") : "";
  const style = `<style>${cssStr}</style>`;
  let templateHtml = fs.readFileSync(
    paths.join(__dirname, "../client/index.html"),
    "utf-8"
  );
  //   let templateHtml = `
  //   <!doctype html>
  //   <html lang="en">
  //     <head>
  //         <meta charset="UTF-8">
  //         <meta name="viewport"
  //               content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  //         <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //         <title>React SSR</title>
  //     </head>
  //     <body>
  //       <div id="root">${html}</div>
  //       <script src="/public/main.js">
  //     </body>
  //   </html>
  // `;
  let index = templateHtml.search("</div>"); // 找到 root 的下一个字符 插入渲染好的html
  let insertJs =`
  <script>
  window._store_ = ${JSON.stringify(state)}
  </script>
  `
  templateHtml =
    templateHtml.slice(0, index) + html + templateHtml.slice(index) + insertJs;
  //console.log(templateHtml, "html");
  res.send(templateHtml);

  return next();
};
