import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import { useAction, useStore, uniqueId, testId, ROUTES } from "../../utils";
import { CharacterCard, Spinner } from "../../components";
import styles from "./Home.module.scss";

export default function Home() {
  const {
    state: {
      characters: { list, charactersLoading },
    },
  } = useStore();

  const { getAllcharacters } = useAction();
  useEffect(() => {
    getAllcharacters();
  }, [getAllcharacters]);

  return (
    <div className={styles.container} data-testid={testId.home.homepage}>
      <Row>
        <Col xs={12}>
          {charactersLoading ? (
            <Spinner />
          ) : (
            <Row>
              <Col xs={12}>
                <ul className={`dFlex flexWrap`}>
                  {list.length > 0 &&
                    list.map((item) => (
                      <li
                        key={uniqueId()}
                        className={`${styles.charactersListItem}`}
                      >
                        <Link
                          to={`${ROUTES.CHARACTER.PATH}/${item.id}`}
                          className={styles.charactersListLink}
                        >
                          <CharacterCard info={item} />
                        </Link>
                      </li>
                    ))}
                </ul>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
