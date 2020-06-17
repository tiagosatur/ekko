import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "..";

export default function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout
            data={{
              routerProps: { ...props },
            }}
          >
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}
