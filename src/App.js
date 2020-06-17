import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import "typeface-roboto";
import "typeface-permanent-marker";

import store from "./store";
import { ROUTES } from "./utils";
import { PublicRoute } from "./components";
import { Home, Details } from "./pages";
import "./styles/app.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute component={Home} path={ROUTES.HOME.PATH} exact />
          <PublicRoute
            component={Details}
            path={`${ROUTES.CHARACTER.PATH}/:id`}
          />
        </Switch>
      </Router>
    </Provider>
  );
}
