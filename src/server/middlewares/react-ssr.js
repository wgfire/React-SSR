// /src/server/middlewares/react-ssr.js
import Layout from "../../client/app/layout"; //如果有 layout 组件，也需要一起转换为 html
//完成 react ssr 工作的中间件
//引入Index 组件
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router";
import routeList from "../../client/router/route-config";
import App from "../../client/app/app";
const fs = require("fs");
const paths = require("path");
export default (req, res, next) => {
  console.log("req.path", req.path);
  const path = req.path;
  let context = {css: [] };
  Promise.all(promise=>{
    const html = renderToString(
      <StaticRouter location={path} context={context}>
        <App routeList={routeList}></App>
      </StaticRouter>
    );
  })

  const cssStr = context.css.length ? context.css.join('\n') : '';
  const style = `<style>${cssStr}</style>`
  let templateHtml = fs.readFileSync(
    paths.join(__dirname, "../client/index.html"),
    "utf-8"
  );    
  let index = templateHtml.search('</div>') // 找到 root 的下一个字符 插入渲染好的html
  templateHtml = templateHtml.slice(0,index) +html+ templateHtml.slice(index)+style
  console.log(templateHtml, "html");
  res.send(templateHtml);

  return next();
}; 
