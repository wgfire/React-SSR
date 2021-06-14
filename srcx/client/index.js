import React from "react";
import { render, hydrate } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App.jsx";
import { BrowserRouter,HashRouter } from "react-router-dom";
render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
// export default <App />;
