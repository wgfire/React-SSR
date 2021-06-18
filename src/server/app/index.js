//web 服务启动入口对象
import Koa from "koa2";
import koaStatic from "koa-static";



import reactSsr from "../middlewares/react-ssr";
import path from "path";
import proConfig from "../../share/pro-config.js";
import express from "express";
const port = 80 || process.env.PORT;

const app = express(); //new Koa();

//设置可访问的静态资源
// app.use(koaStatic('./dist/static'));

app.use("/public", express.static(path.join(__dirname, "../client"),{
    cacheControl:"no-cache"
})); // 这个路径要用path.join拼接起来



//ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(port);

console.log("server is start .", `http://localhost:${port}`);
