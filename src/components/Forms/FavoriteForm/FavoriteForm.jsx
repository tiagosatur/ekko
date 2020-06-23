import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";

import { Button, SubmitButton, Textarea, TextInput } from "../../../components";
import { ROUTES } from "../../../utils";
import styles from "./FavoriteForm.module.scss";

export default function FavoriteForm({
  actions: { handleSubmit, handleSubmitForm, register },
}) {
  const history = useHistory();
  const itMatchesUpdateRoute = useRouteMatch(ROUTES.FAVORITE.UPDATE.PATH);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <form
      className={styles.favoriteForm}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Row>
        <Col xs={12} md={6}>
          <TextInput
            label="Name"
            name="name"
            register={register}
            disabled={true}
          />

          <TextInput
            label="Location"
            name="locationName"
            register={register({ required: true })}
            disabled={false}
          />

          <TextInput
            label="Creation date"
            name="created"
            register={register}
            disabled={true}
          />

          <TextInput
            label="Species"
            name="species"
            register={register({ required: true })}
          />
        </Col>
        <Col xs={12} md={6}>
          <Textarea
            label="Characteristics"
            name="characteristics"
            register={register}
          />

          <div className={styles.bottom}>
            <Button label="Go back" handleClick={handleGoBack} />
            <SubmitButton
              contained
              primary
              label={itMatchesUpdateRoute ? "Save" : "Add"}
            />
          </div>
        </Col>
      </Row>
    </form>
  );
}
