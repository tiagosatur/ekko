import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import "typeface-roboto";
import "typeface-permanent-marker";

import store from "./store";
import { ROUTES } from "./utils";
import { PublicRoute } from "./components";
import {
  Home,
  ViewCharacter,
  NewFavorite,
  UpdateFavorite,
  ViewFavorites,
} from "./pages";
import "./styles/app.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute component={Home} path={ROUTES.HOME.PATH} exact />
          <PublicRoute
            component={ViewCharacter}
            path={`${ROUTES.CHARACTER.PATH}/:id`}
          />
          <PublicRoute
            component={NewFavorite}
            path={`${ROUTES.FAVORITE.NEW.PATH}/:id`}
          />
          <PublicRoute
            component={UpdateFavorite}
            path={`${ROUTES.FAVORITE.UPDATE.PATH}/:id`}
          />
          <PublicRoute
            component={ViewFavorites}
            path={`${ROUTES.FAVORITE.VIEW.PATH}`}
          />
        </Switch>
      </Router>
    </Provider>
  );
}
