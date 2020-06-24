import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";

import { useAction, useStore, uniqueId, testId } from "../../utils";
import { CharacterCard, Spinner } from "../../components";
import styles from "./Home.module.scss";

export default function Home() {
  const {
    state: {
      characters: { list, charactersLoading },
    },
  } = useStore();

  const { getAllcharacters, deleteFavorite, addFavorite } = useAction();
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
                  {list?.length > 0 &&
                    list?.map((item) => (
                      <li
                        key={uniqueId()}
                        className={`${styles.charactersListItem}`}
                      >
                        <CharacterCard
                          info={item}
                          actions={{
                            handleDeleteFavorite: deleteFavorite,
                            handleAddFavorite: addFavorite,
                          }}
                        />
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
