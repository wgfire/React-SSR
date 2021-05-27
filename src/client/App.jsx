import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Button } from "antd-mobile";
import { Switch, Route } from "react-router-dom";
import Test from "./view/test.jsx";
const App = () => {
  const [name, setName] = useState("wg");
  useEffect(() => {
    setName("AG");
  });

  return (
    <>
      {/* <Button>xxx</Button>
      <h1>Reacffatsss</h1>
      <div>{name}</div> */}
      <Switch>
        <Route exact path="/" component={Test} />
      </Switch>
    </>
  );
};

export default hot(App);
