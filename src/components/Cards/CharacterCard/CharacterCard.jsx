import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BsStarFill, BsStar, BsPencil } from "react-icons/bs";

import { Card } from "..";
import { Text, Status } from "../..";
import { ROUTES } from "../../../utils";
import styles from "./CharacterCard.module.scss";

export default function CharacterCard({
  info,
  info: {
    id,
    name,
    image,
    status,
    species,
    locationName,
    location,
    isFavorite,
  },
  actions: { handleDeleteFavorite, handleAddFavorite },
  className,
}) {
  const history = useHistory();
  return (
    <Card className={className}>
      <Link
        to={`${ROUTES.CHARACTER.PATH}/${id}`}
        className={styles.charactersListLink}
      >
        <div className={`${styles.container}`}>
          <div className={styles.cardMedia}>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className={styles.characterImage}
            />
          </div>
          <div className={`${styles.cardContent}`}>
            <header className={styles.cardHeader}>
              <Text className={`${styles.characterName} whiteSmoke`}>
                {name}
              </Text>

              <Status status={status} species={species} />
            </header>
            <div className={`whiteSmoke`}>
              <Text className={`${styles.locationLabel} `}>
                Last known location
              </Text>
              <Text className={`${styles.locationName}`}>
                {locationName ? locationName : location?.name}
              </Text>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.actionButtons}>
        {isFavorite ? (
          <div className={styles.favoritedButtonsWrapper}>
            <button
              onClick={() => handleDeleteFavorite(id)}
              className={styles.button}
            >
              <BsStarFill className={styles.starIcon} />
            </button>

            <button
              onClick={() =>
                history.push(`${ROUTES.FAVORITE.UPDATE.PATH}/${id}`)
              }
              className={styles.button}
            >
              <BsPencil className={styles.starIcon} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleAddFavorite(info)}
            className={styles.button}
          >
            <BsStar className={styles.starIcon} />
          </button>
        )}
      </div>
    </Card>
  );
}
