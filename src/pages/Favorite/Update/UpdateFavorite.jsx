import React, { useState, useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  useAction,
  useStore,
  populateFavoriteForm,
  uniqueId,
} from "../../../utils";
import { FavoriteForm, Spinner, Toast } from "../../../components";
import styles from "./UpdateFavorite.module.scss";

export default function UpdateFavorite() {
  const [favoriteInfo, setFavoriteInfo] = useState({});
  const [toastList, setToastList] = useState([]);

  const {
    state: {
      favorites: { characters: favoriteCharacters, favoriteLoading },
    },
  } = useStore();
  let { id } = useParams();

  const { actions } = useAction();

  const { register, getValues, setValue, handleSubmit, formState } = useForm();
  const findFavorite = (arr) =>
    arr.find((item) => parseInt(item.id) === parseInt(id));

  useEffect(() => {
    const found = findFavorite(favoriteCharacters);
    setFavoriteInfo(found);
    populateFavoriteForm(found, setValue);
  }, [id, favoriteCharacters]);

  async function handleSubmitForm(values) {
    console.log("formState", formState);

    await actions.updateFavorite({
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
