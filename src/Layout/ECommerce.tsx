import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { routes, Route as IRoute } from "../routes";

export const EcommerceLayout = () => {
  return (
    <div>
      ECOMMERCE LAYOUT
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/items">Items</a>
        </li>
      </ul>
      <Switch>
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
        <Redirect from="*" to="/404"></Redirect>
      </Switch>
    </div>
  );
};
