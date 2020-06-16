import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import "typeface-roboto";
import "typeface-permanent-marker";

import store from "./store";
import { Layout } from "./components";
import { Home } from "./pages";
import "./styles/app.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Switch>
            <Route component={Home} path="/" exact />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  );
}
