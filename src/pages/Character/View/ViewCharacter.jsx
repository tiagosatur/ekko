import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { useHistory, useParams } from "react-router-dom";
import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { isEmpty } from "lodash";

import { useAction, useStore, useDate, uniqueId, ROUTES } from "../../../utils";
import {
  IconButton,
  Status,
  Spinner,
  Text,
  EpisodeCard,
} from "../../../components";
import styles from "./ViewCharacter.module.scss";

export default function ViewCharacter() {
  const [isItFavorite, setAsFavorite] = React.useState(null);
  const {
    state: {
      character: { info, episodes, characterLoading },
      favorites: { characters: favoriteCharacters },
    },
  } = useStore();
  let { id } = useParams();
  let history = useHistory();
  const { getCharacter, getEpisodesById, deleteFavorite } = useAction();

  useEffect(() => {
    getCharacter(id);
    const isCharacterAlreadyFavorited = !isEmpty(
      favoriteCharacters?.find((item) => item.id === parseInt(id))
    );
    setAsFavorite(isCharacterAlreadyFavorited);
  }, [id, getCharacter, favoriteCharacters]);

  useEffect(() => {
    const joinedEpisodesId = info?.episode?.join(",");
    joinedEpisodesId && getEpisodesById(joinedEpisodesId);
  }, [info, getEpisodesById]);

  function handleDeleteFavorite() {
    deleteFavorite(id);
  }

  return (
    <div className={styles.container} data-testid="homepage">
      <Row>
        <Col xs={12}>
          {characterLoading ? (
            <Spinner />
          ) : (
            <Row>
              <Col xs={12} md={5}>
                <div className={`${styles.media}`}>
                  <div
                    className={`${styles.image}`}
                    style={{
                      backgroundImage: `url(${info?.image})`,
                    }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div className={`${styles.info}`}>
                  <h2 className={styles.name}>{info?.name}</h2>
                  <Status status={info?.status} species={info?.species} />

                  <Text className={styles.gender}>
                    <span className={styles.label}>Gender</span>
                    {info?.gender}
                  </Text>
                  <Text>
                    <span className={styles.label}>Location</span>
                    {info?.location?.name}
                  </Text>

                  <Text className={styles.creationDate}>
                    <span className={styles.label}>Created at</span>
                    {info?.created && useDate.format.iso.date(info.created)}
                  </Text>

                  <div className={styles.actionButtons}>
                    <IconButton
                      primary
                      outlined
                      title={`${isItFavorite ? "Update" : "Add"} favorite`}
                      handleClick={() => {
                        history.push(
                          isItFavorite
                            ? `${ROUTES.FAVORITE.UPDATE.PATH}/${id}`
                            : `${ROUTES.FAVORITE.NEW.PATH}/${id}`
                        );
                      }}
                    >
                      {isItFavorite ? <AiFillEdit /> : <AiFillStar />}
                    </IconButton>
                    {isItFavorite && (
                      <IconButton
                        handleClick={handleDeleteFavorite}
                        primary
                        outlined
                        title="Delete favorite"
                      >
                        <AiFillDelete />
                      </IconButton>
                    )}
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <h3 className={styles.episodeHeading}>Episodes</h3>
                <ul className={styles.episodes}>
                  {!isEmpty(episodes) &&
                    episodes.map((item) => (
                      <li className={styles.episodeItem} key={uniqueId()}>
                        <EpisodeCard info={item} />
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
