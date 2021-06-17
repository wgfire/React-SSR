import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// import { Button } from "antd-mobile";

const LayOut = (props) => {
  return (
    <div>
      <NavLink to="/index" style={{ marginLeft: "10px" }}>
        <button>首页</button>
      </NavLink>
      <NavLink style={{ marginLeft: "10px" }} to="/list">
        <button>列表页</button>
      </NavLink>
      <NavLink to="/about" style={{ marginLeft: "10px" }}>
        <button>关于</button>
      </NavLink>
      {props.children}
    </div>
  );
};
//带入路由信息
export default withRouter(LayOut);
