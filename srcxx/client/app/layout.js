import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
const Index = (props) => {
  return (
    <div>
      <NavLink to="/index" style={{ marginLeft: "10px" }}>
        首页
      </NavLink>
      <NavLink style={{ marginLeft: "10px" }} to="/list">
        列表页
      </NavLink>
      <NavLink to="/about" style={{ marginLeft: "10px" }}>
        关于
      </NavLink>
      {props.children}
    </div>
  );
};
//带入路由信息
export default withRouter(Index);
