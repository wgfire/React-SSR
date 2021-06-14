const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//import serverApp from '../client/AppServer' //如果引入路由这里 就不是直接引入组件了， 要根据返回 的路径去 找到 组件 然后 renderTostring

import {render}from './utils'
import routes from '../router/index'
const ReactDomServer = require("react-dom/server");
import { matchRoutes } from 'react-router-config';

let template = fs.readFileSync(
  path.join(__dirname, "./client/index.html"),
  "utf-8"
);


const PORT = process.env.PORT || 5000;

app.use("/public", express.static(path.join(__dirname,'./client')));

app.get("*", (req, res) => {
 // const matchedRoutes = matchRoutes(routes, req.path);
 console.log('执行')
//  const AppString = render(routes,req)


 const url = req.url;
 //简单容错，排除图片等资源文件的请求
 if(url.indexOf('.')>-1) { res.end(''); return false;}

 res.writeHead(200, {
     'Content-Type': 'text/html'
 });


 //查找组件
 const branch =  matchRoutes(routes,url);
 
 //得到组件
 const Component = branch[0].route.component;

 //将组件渲染为 html 字符串
 const html = renderToString(<Component />);
 template = template.replace("<!-- <app> -->", html);
 console.log(template,'template')
 res.send(template);

});
app.listen(PORT, () => {
  console.log("server on " + PORT);
});
