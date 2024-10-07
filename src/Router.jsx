// * React
import { useRoutes } from "react-router-dom";

// * Layouts
import { Layout } from "@layout";

const routeConfigs = [
  {
    element: <Layout />,
    path: "/",
  },
];
const Router = () => {
  const routes = useRoutes(routeConfigs);
  return routes;
};

export default Router;
