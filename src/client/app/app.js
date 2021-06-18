import Layout from "./layout";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

function App({ routeList }) {
  return (
    <Layout>
      <Switch>
        {routeList.map(({ path, component }) => {
          const C = component;
          return (
            <Route
              exact
              key={path}
              path={path}
              render={(p) => {
                return <C />;
              }}
            ></Route>
          );
        })}
      </Switch>
    </Layout>
  );
}

export default withRouter(App);
