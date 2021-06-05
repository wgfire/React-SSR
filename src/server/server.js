const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//const serverApp = require("../../dist/AppServer").default;

import serverApp from '../client/AppServer' //如果引入路由这里 就不是直接引入组件了， 要根据返回 的路径去 找到 组件 然后 renderTostring
import ReactDom from 'react-dom';
const ReactDomServer = require("react-dom/server");
const AppString = ReactDomServer.renderToString(serverApp);

let template = fs.readFileSync(
  path.join(__dirname, "./client/index.html"),
  "utf-8"
);
template = template.replace("<!-- <app> -->", AppString);

const PORT = process.env.PORT || 5000;

app.use("/public", express.static(path.join(__dirname,'./client')));

app.get("/", (req, res) => {
  res.send(template);
});
app.listen(PORT, () => {
  console.log("server on " + PORT);
});
