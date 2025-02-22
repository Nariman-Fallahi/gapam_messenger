import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("app/:userID?", "routes/home.tsx"),
] satisfies RouteConfig;
