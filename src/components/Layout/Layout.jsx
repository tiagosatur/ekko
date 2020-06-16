import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Header } from "..";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Grid data-testid="layout">
        <Row>
          <Col xs={12}>
            <main className="padding 64 0">{children}</main>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
