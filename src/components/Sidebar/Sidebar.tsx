import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Route } from "../../routes";

import "./Sidebar.scss";

interface SidebarProps {
  sidebarOpen: boolean;
  onCloseSidebar: Function;
  routes: Route[];
  activeRoute: string;
}

export const Sidebar: FunctionComponent<SidebarProps> = (
  props: SidebarProps
) => {
  const { sidebarOpen, onCloseSidebar, routes, activeRoute } = props;

  return (
    <div
      className={sidebarOpen ? "sidebar-container" : "sidebar-container-close"}
    >
      <div className="sidebar-header">
        <div className="logo">Dashboard</div>
        <div className="hamburger-container" onClick={() => onCloseSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="sidebar-body">
        {routes.map((item, index) => {
          return (
            <NavLink
              className={"sidebar-item"}
              activeClassName={
                item.path == "/"
                  ? item.path == activeRoute
                    ? "sidebar-item-active"
                    : "sidebar-item"
                  : "sidebar-item-active"
              }
              style={{ textDecoration: "inherit" }}
              to={item.path}
              key={index}
            >
              <div className="sidebar-item-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="sidebar-item-name">
                <a>{item.name}</a>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
