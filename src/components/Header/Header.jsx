import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

import { ROUTES } from "../../utils";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container} data-testid="header">
      <Grid data-testid="layout">
        <Row>
          <Col xs={12} md={6}>
            <Link to={ROUTES.HOME.PATH}>
              <h2 className={styles.heading}>Rick & Morty</h2>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <nav>
              <ul className={`${styles.navList} dFlex flexCenterY`}>
                <li className={styles.navItem}>
                  <Link to={ROUTES.HOME.PATH} className={styles.link}>
                    {ROUTES.HOME.LABEL}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.FAVORITES.PATH} className={styles.link}>
                    {ROUTES.FAVORITES.LABEL}
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
