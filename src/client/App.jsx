import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Button } from "antd-mobile";
const App = () => {
  const [name, setName] = useState("wg");
  useEffect(() => {
    setName("AG");

    return function () {
      console.log(name, "X");
      // window.React2 = require("react");
      // console.log(window.React1 === window.React2);
    };
  });

  return (
    <>
      <Button>xxx</Button>
      <h1>Reacffatsss</h1>
      <div>{name}</div>
    </>
  );
};

export default hot(App);
