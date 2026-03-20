import config from "../config";

// Pages
import Overview from "../pages/Overview";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Client from "../pages/Client";
import Report from "../pages/Report";

// Public routes
const publicRoutes = [
  { path: config.routes.overview, component: Overview },
  { path: config.routes.product, component: Product },
  { path: config.routes.order, component: Order },
  { path: config.routes.client, component: Client },
  { path: config.routes.report, component: Report },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
