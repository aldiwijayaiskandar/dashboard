import React from "react";
import { HomePage, ItemPage, NotFound } from "./pages";

export interface Route {
  path: string;
  name: string;
  component: () => JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/items",
    name: "Items",
    component: ItemPage,
  },
];
