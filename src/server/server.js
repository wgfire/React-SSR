const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//const serverApp = require("../../dist/AppServer").default;

import serverApp from '../client/AppServer'

const ReactDomServer = require("react-dom/server");
const AppString = ReactDomServer.renderToString(serverApp);

let template = fs.readFileSync(
  path.join(__dirname, "index.html"),
  "utf-8"
);
template = template.replace("<!-- <app> -->", AppString);

const PORT = process.env.PORT || 5000;

app.use("/public", express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.send(template);
});
app.listen(PORT, () => {
  console.log("server on " + PORT);
});
