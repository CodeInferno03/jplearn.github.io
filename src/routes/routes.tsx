import { RouteObject } from "react-router-dom";
// import Home from "../views/Home/Home";
// import Dashboard from "../views/Dashboard/Dashboard";
// import NotFound from "../views/NotFound/NotFound";

export const appRoutes: RouteObject[] = [
  { path: "/", element: <div /> },
  { path: "/dashboard", element: <div /> },
  { path: "*", element: <div /> },
];
