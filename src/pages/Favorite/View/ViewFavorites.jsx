import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { useHistory } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { useStore, useAction, uniqueId, ROUTES } from "../../../utils";
import { CharacterCard, IconButton, Spinner } from "../../../components";
import styles from "./ViewFavorites.module.scss";

export default function ViewFavorites() {
  const {
    state: {
      favorites: { characters, favoriteLoading },
    },
  } = useStore();
  const { actions } = useAction();
  let history = useHistory();

  function handleDeleteFavorite(id) {
    actions.deleteFavorite(id);
  }

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
                        <CharacterCard info={item} className={styles.card} />
                        <div className={styles.actionButtons}>
                          <IconButton
                            primary
                            contained
                            title={`Update favorite`}
                            handleClick={() => {
                              history.push(
                                `${ROUTES.FAVORITE.UPDATE.PATH}/${item.id}`
                              );
                            }}
                          >
                            <AiFillEdit />
                          </IconButton>
                          <IconButton
                            handleClick={() => handleDeleteFavorite(item.id)}
                            primary
                            contained
                            title="Delete favorite"
                          >
                            <AiFillDelete />
                          </IconButton>
                        </div>
                        <div className={styles.overlay} />
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
