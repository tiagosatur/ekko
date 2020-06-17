import React from "react";

import { useDate } from "../../../utils";
import { Text } from "../..";
import styles from "./EpisodeCard.module.scss";

export default function EpisodeCard({ info }) {
  return (
    <a
      className={styles.episodeCard}
      href={info.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text className={styles.episodeName}>{info.name}</Text>
      <div className="dFlex flexCenterX">
        <Text className={styles.episodeCode}>{info.episode}</Text>
        <Text className={styles.episodeDate}>
          {info.created && useDate.format.iso.date(info.created)}
        </Text>
      </div>
    </a>
  );
}
