//src/client/pages/index/index.js
//index 组件

import React, { useEffect } from "react";
import styles from "./index.module.scss";
import withStyles from "isomorphic-style-loader/withStyles";
// import { Button } from "antd-mobile";
//组件
const Index = (props) => {
  const handedClick = () => {
    console.log("被点击了，，");
  };
  useEffect(() => {
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss());
    }
  }, []);
  return (
    <div onClick={handedClick}>
      <span className={styles.title}>我是首页</span>
    </div>
  );
};
export default Index;
