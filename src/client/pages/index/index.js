//src/client/pages/index/index.js
//index 组件

import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { connect, useSelector, useDispatch } from "react-redux";
// import { Button } from "antd-mobile";
//组件
const Index = (props) => {
  const store = useSelector((state) => {
    return Object.assign({}, state);
  });
  const Dispatch = useDispatch();
  const { home } = store;
  console.log(store, "index");
  const handedClick = () => {
    Dispatch({ type: "changeName", name: "wg" });
    console.log("被点击了");
  };
  useEffect(() => {
    console.log("执行了css", props);
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss());
    }
  }, []);
  return (
    <div onClick={handedClick}>
      <span className={styles.title}>我是首页</span>
      <span className={styles.title}>{home.name}</span>
    </div>
  );
};

export default Index;
