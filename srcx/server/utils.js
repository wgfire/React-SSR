import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import React from "react";
export const render = (routes, req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <div>{renderRoutes(routes)}</div>
    </StaticRouter>
  );
  return content;
};
