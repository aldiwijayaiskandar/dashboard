import React from "react";

// Style
import "./EcommerceDashboardLayout.scss";

// Route
import { Redirect, Route, Switch, Link } from "react-router-dom";
import { routes, Route as IRoute } from "../routes";

// Component
import { Navbar, Sidebar } from "../components";

export const EcommerceDashboardLayout = (props) => {
  const { location } = props;
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const setCloseSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout-container">
      <Sidebar
        sidebarOpen={sidebarOpen}
        onCloseSidebar={() => {
          setCloseSidebar();
        }}
        routes={routes}
        activeRoute={location.pathname}
      />
      <div className="content-container">
        <Navbar />
        <div className="content-container-body">
          {routes.map((props: IRoute, key) => {
            return (
              <Route
                path={props.path}
                exact={props.path == "/"}
                component={props.component}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
