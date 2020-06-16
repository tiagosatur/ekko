import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container} data-testid="header">
      <Grid data-testid="layout">
        <Row>
          <Col xs={12}>
            <h2 className={styles.heading}>Rick & Morty</h2>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
