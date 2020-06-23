import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

import {
  useAction,
  useStore,
  ROUTES,
  populateFavoriteForm,
} from "../../../utils";
import { FavoriteForm, Spinner } from "../../../components";
import styles from "./NewFavorite.module.scss";

export default function NewFavorite() {
  const {
    state: {
      character: { info, characterLoading },
    },
  } = useStore();
  let { id } = useParams();
  const { getCharacter, addFavorite } = useAction();
  let history = useHistory();

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    getCharacter(id);
  }, [id, getCharacter]);

  useEffect(() => {
    populateFavoriteForm(info, setValue);
  }, [info, setValue]);

  async function handleSubmitForm(values) {
    await addFavorite({ ...info, ...values });
    history.push(ROUTES.FAVORITE.VIEW.PATH);
  }

  return (
    <div className={styles.container} data-testid="homepage">
      <Row>
        <Col xs={12}>
          {characterLoading ? (
            <Spinner />
          ) : (
            <Row>
              <Col xs={12}>
                <div className={`${styles.info}`}>
                  <h2 className={styles.characterName}>{info?.name}</h2>
                  {!isEmpty(info) && (
                    <FavoriteForm
                      actions={{ handleSubmit, handleSubmitForm, register }}
                    />
                  )}
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
