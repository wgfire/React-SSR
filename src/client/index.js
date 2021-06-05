import React from "react";
import { render, hydrate } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// export default <App />;
