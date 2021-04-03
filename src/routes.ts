import React from "react";
import { HomePage, ItemPage, NotFound } from "./pages";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
export interface Route {
  path: string;
  icon: IconProp;
  name: string;
  component: () => JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    icon: faHome,
    name: "Home",
    component: HomePage,
  },
  {
    path: "/items",
    icon: faList,
    name: "Items",
    component: ItemPage,
  },
];
