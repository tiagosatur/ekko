import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-flexbox-grid";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  useAction,
  useStore,
  populateFavoriteForm,
  uniqueId,
  ROUTES,
} from "../../../utils";
import { FavoriteForm, Spinner, Toast } from "../../../components";
import styles from "./UpdateFavorite.module.scss";

export default function UpdateFavorite() {
  const [favoriteInfo, setFavoriteInfo] = useState({});
  const [toastList, setToastList] = useState([]);
  const history = useHistory();

  const {
    state: {
      favorites: { characters: favoriteCharacters, favoriteLoading },
    },
  } = useStore();
  let { id } = useParams();

  const { updateFavorite } = useAction();

  const { register, getValues, setValue, handleSubmit } = useForm();
  const findFavorite = useCallback(
    (arr) => arr.find((item) => parseInt(item.id) === parseInt(id)),
    [id]
  );

  useEffect(() => {
    const found = findFavorite(favoriteCharacters);
    if (!found) history.push(ROUTES.FAVORITE.VIEW.PATH);

    setFavoriteInfo(found);
    populateFavoriteForm(found, setValue);
  }, [id, setValue, findFavorite, favoriteCharacters, history]);

  async function handleSubmitForm(values) {
    await updateFavorite({
      id,
      ...values,
    });
    setToastList([
      {
        id: uniqueId(),
        title: "Success",
        description: "Favorite updated with success!",
        type: "success",
      },
    ]);
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
                <div className={styles.info}>
                  <h2 className={styles.characterName}>{favoriteInfo?.name}</h2>
                  {favoriteInfo && (
                    <FavoriteForm
                      actions={{
                        handleSubmit,
                        handleSubmitForm,
                        register,
                        getValues,
                      }}
                    />
                  )}
                </div>
                <Toast
                  toastList={toastList}
                  autoClose={true}
                  dismissTime={3000}
                />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
