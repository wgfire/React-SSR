import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import router from "../router/index";
const App = () => {
  return (
    <Switch>
      {router.routes.map((el) => {
        return <Route path={el.path} exact component={el.component}></Route>;
      })}
    </Switch>
  );
};

export default App;
