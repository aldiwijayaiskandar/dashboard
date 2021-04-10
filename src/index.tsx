import React from "react";
import ReactDOM from "react-dom";
import "./theme/index.scss";

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
import { EcommerceDashboardLayout } from "./Layout/ECommerceDashboardLayout";

// Web Performance Measure
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <Helmet>
          <title>App Title Boilerplate</title>
        </Helmet>
        <BrowserRouter>
          <Route path="/login" component={Login} />
          <Route path="/" component={EcommerceDashboardLayout} />
        </BrowserRouter>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
