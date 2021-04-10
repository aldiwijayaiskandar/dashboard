import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Route } from "../../routes";

import "./Sidebar.scss";
interface SidebarItemProps {
  item: Route;
  activeRoute: string;
  noIcon?: boolean;
}

export const SidebarItem: React.FunctionComponent<SidebarItemProps> = (
  props: SidebarItemProps
) => {
  const [open, setOpen] = React.useState(false);
  const { item, noIcon, activeRoute } = props;

  React.useEffect(() => {
    console.log("Item", item);
  }, []);

  return item?.children ? (
    <>
      <div
        className={"sidebar-item children"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="sidebar-item-inner-container">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div className="sidebar-item-name">
            <a>{item.name}</a>
          </div>
        </div>
        <span className="sidebar-caret" style={{ marginRight: 15 }}>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
        </span>
      </div>
      <div className="sidebar-item-item">
        {open &&
          item.children.map((item, index) => (
            <SidebarItem
              item={item}
              activeRoute={activeRoute}
              noIcon={true}
              key={index}
            />
          ))}
      </div>
    </>
  ) : (
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
    >
      {!noIcon && (
        <div className="sidebar-item-icon">
          <FontAwesomeIcon icon={item.icon} />
        </div>
      )}
      {noIcon && (
        <div className="sidebar-item-icon">
          {item.name.charAt(0).toUpperCase()}
        </div>
      )}
      <div className="sidebar-item-name">
        <a>{item.name}</a>
      </div>
    </NavLink>
  );
};

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

  React.useEffect(() => {
    console.log("Routes", routes);
  }, []);

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
        {routes.map((item, index) => (
          <SidebarItem item={item} activeRoute={activeRoute} key={index} />
        ))}
      </div>
    </div>
  );
};
