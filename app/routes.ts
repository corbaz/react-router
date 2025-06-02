// ./app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { getRouterRoutes } from "./config/config";

const routes = getRouterRoutes();

export default routes.map((routeConfig) => {
    if (routeConfig.isIndex) {
        return index(routeConfig.component);
    }
    return route(routeConfig.path, routeConfig.component);
}) satisfies RouteConfig;
