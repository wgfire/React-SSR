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
  const { data } = home;
  console.log(home, "服务端会显示");
  // console.log(props.staticContext,'服务端会显示props')
  const handedClick = () => {
    Dispatch({ type: "changeName", name: "wg" });
  };
  // useEffect(() => {

  //    console.log('服务端不执行这个周期')
  //   if (props.staticContext) {
  //     props.staticContext.css.push(styles._getCss());
  //   }
  // }, []);

  return (
    <div onClick={handedClick}>
      <span className={styles.title}>我是首页</span>
      <span className={styles.title}>{home.name}</span>
      {/* <span >{data.name}</span> */}
    </div>
  );
};
export const _GetInitData = () => {
  return {
    name: "初始化数据" ,
  };
};
export default Index;
