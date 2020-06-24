import React from "react";
import { Row, Col } from "react-flexbox-grid";

import { useStore, useAction, uniqueId } from "../../../utils";
import { CharacterCard, Spinner } from "../../../components";
import styles from "./ViewFavorites.module.scss";

export default function ViewFavorites() {
  const {
    state: {
      favorites: { characters, favoriteLoading },
    },
  } = useStore();
  const { deleteFavorite, addFavorite } = useAction();

  return (
    <div className={styles.container} data-testid="homepage">
      <Row>
        <Col xs={12}>
          {favoriteLoading ? (
            <Spinner />
          ) : (
            <Row>
              <Col xs={12}>
                <h2 className={styles.heading}>My favorites</h2>

                <ul className={styles.charactersList}>
                  {characters?.length === 0 ? (
                    <div className={styles.zeroFavorites}>
                      No favorites yet
                      <span className={styles.sadFace}>:(</span>
                    </div>
                  ) : (
                    characters?.map((item) => (
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
                          className={styles.card}
                        />
                      </li>
                    ))
                  )}
                </ul>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
