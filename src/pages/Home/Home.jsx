import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";

import { useAction, useStore, uniqueId } from "../../utils";
import { Text, CharacterCard, Spinner } from "../../components";
import styles from "./Home.module.scss";

export default function Home() {
  const { actions } = useAction();
  const {
    state: {
      characters: { list, charactersLoading },
    },
  } = useStore();

  useEffect(() => {
    actions.getAllcharacters();
  }, []);

  return (
    <div className={styles.container} data-testid="homepage">
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
                        <CharacterCard info={item} />
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
