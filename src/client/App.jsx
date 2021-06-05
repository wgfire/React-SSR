import React, { useEffect, useState } from "react";
import Index from "./view/index.jsx";
import { Switch, Route } from "react-router-dom";
import router from "../router/index";
import Page from "./view/page.jsx";
const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/page" exact component={Page}></Route>
    </Switch>
  );
};

export default App;
