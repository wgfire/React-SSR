import { matchPath } from "react-router";
import routeList from "../../client/router/route-config";
export const matchRoute = (opt) => {
  let { path } = opt;
  let route;
  for (var item of routeList) {
    if (matchPath(path, item)) {
      route = item;
      break;
    }
  }
  return route;
};
