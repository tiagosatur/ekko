import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { AiFillHome, AiFillStar } from "react-icons/ai";

import { ROUTES, testId } from "../../utils";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div
      className={styles.container}
      data-testid={testId.header.headerContainer}
    >
      <Grid data-testid="layout">
        <Row>
          <Col xs={12}>
            <nav>
              <ul className={`${styles.navList}`}>
                <li>
                  <Link to={ROUTES.HOME.PATH} className={styles.link}>
                    <AiFillHome className={styles.homeIcon} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.FAVORITE.VIEW.PATH} className={styles.link}>
                    <AiFillStar className={styles.starIcon} />
                    {ROUTES.FAVORITE.VIEW.LABEL}
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
