import React from "react";
import { HomePage, ItemPage, NotFound } from "./pages";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHome, faAdjust } from "@fortawesome/free-solid-svg-icons";
export interface Route {
  path?: string;
  icon: IconProp;
  name: string;
  component?: () => JSX.Element;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/",
    icon: faHome,
    name: "Home",
    component: HomePage,
  },
  {
    path: "/configuration",
    icon: faAdjust,
    name: "Configuration",
    children: [
      {
        path: "/test",
        icon: faHome,
        name: "Test",
        component: HomePage,
      },
    ],
  },
];
