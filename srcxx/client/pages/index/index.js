//src/client/pages/index/index.js
//index 组件

import React from "react";
import { Link } from "react-router-dom";
//组件
const Index = () => {
  const handlerClick = () => {
    alert("一起来玩 react 服务端渲染");
  };

  return <div onClick={handlerClick}>首页</div>;
};
export default Index;
