import React, { useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";

import { useAction, useStore, useDate, uniqueId } from "../../utils";
import { Button, Status, Spinner, Text, EpisodeCard } from "../../components";
import styles from "./Details.module.scss";

export default function Details() {
  let { id } = useParams();
  const { actions } = useAction();
  const {
    state: {
      character: { info, characterLoading },
      episodes: { list: episodeList, episodesLoading },
    },
  } = useStore();

  useEffect(() => {
    actions.getCharacter(id);
  }, [id]);

  useEffect(() => {
    const joinedEpisodesId = info?.episode?.join(",");
    joinedEpisodesId && actions.getEpisodesById(joinedEpisodesId);
  }, [info.episode]);

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
                <div
                  className={`${styles.info} dFlex flexColumn flexAlignEnd white`}
                >
                  <h2 className={styles.name}>{info?.name}</h2>
                  <Status status={info?.status} species={info?.species} />

                  <Text className={styles.gender}>
                    <span className={styles.label}>Gender</span>
                    {info?.gender}
                  </Text>
                  <Text className={styles.origin}>
                    <span className={styles.label}>Location</span>
                    {info?.origin?.name}
                  </Text>

                  <Text className={styles.creationDate}>
                    <span className={styles.label}>Created at</span>
                    {info?.created && useDate.format.iso.date(info.created)}
                  </Text>

                  <Button label="Add favorite" handleClick={() => {}} />
                </div>
              </Col>
              <Col xs={12}>
                <h3 className={styles.episodeHeading}>Episodes</h3>
                <ul className={styles.episodeList}>
                  {!isEmpty(episodeList) &&
                    episodeList.map((item) => (
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
