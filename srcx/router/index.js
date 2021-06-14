import App from "../client/App.jsx";
import Index from "../client/view/index.jsx";
import Page from "../client/view/page.jsx";
export default {
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/page",
      component: Page,
    },
  ],
};
