import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

import { useAction, useStore, uniqueId, testId } from "../../utils";
import { CharacterCard, Spinner, SearchForm } from "../../components";
import styles from "./Home.module.scss";

export default function Home() {
  const {
    state: {
      characters: { list, charactersLoading, error },
    },
  } = useStore();

  const {
    getAllcharacters,
    deleteFavorite,
    addFavorite,
    searchCharacters,
  } = useAction();
  useEffect(() => {
    getAllcharacters();
  }, [getAllcharacters]);

  const { register, handleSubmit } = useForm();

  function handleSubmitSearch(data) {
    if (!isEmpty(data.term)) {
      searchCharacters(data.term);
    }
  }

  return (
    <div className={styles.container} data-testid={testId.home.homepage}>
      <Row>
        <Col xs={12}>
          <SearchForm
            actions={{ register, handleSubmit, handleSubmitSearch }}
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
        </Col>
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
