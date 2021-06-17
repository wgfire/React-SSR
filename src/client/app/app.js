
import Layout from "./layout";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
function App({ routeList }) {
  return (
    <Layout>
      <Switch>
        {routeList.map((item) => {
          return <Route exact key={item.path}  {...item} ></Route>;
        })}
      </Switch>
    </Layout>
  );
}

export default withRouter(App);