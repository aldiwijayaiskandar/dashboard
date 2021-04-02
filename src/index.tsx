import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";

// SEO
import { Helmet, HelmetProvider } from "react-helmet-async";

// State Management
import { Provider } from "react-redux";
import { persistor, store } from "./@redux/store";
import { PersistGate } from "redux-persist/integration/react";

// pages
import { Login, NotFound } from "./pages";

// Web Pages History
import { createBrowserHistory } from "history";

// Core Pages
import { Route, Router, Switch } from "react-router";
import { EcommerceLayout } from "./Layout/ECommerce";

// Web Performance Measure
import reportWebVitals from "./reportWebVitals";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <Helmet>
          <title>App Title Boilerplate</title>
        </Helmet>
        <Router history={hist}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={EcommerceLayout} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Router>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
