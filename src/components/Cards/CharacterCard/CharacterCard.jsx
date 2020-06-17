import React from "react";
import { Card } from "..";
import { Text, Status } from "../..";
import styles from "./CharacterCard.module.scss";

export default function CharacterCard({
  info: { id, name, image, status, species, location },
}) {
  return (
    <Card>
      <div className={`${styles.container} dFlex`}>
        <div className={styles.cardMedia}>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={styles.characterImage}
          />
        </div>
        <div className={`${styles.cardContent} dFlex flexColumn`}>
          <header className={styles.cardHeader}>
            <Text className={`${styles.characterName} whiteSmoke`}>{name}</Text>

            <Status status={status} species={species} />
          </header>
          <div className={`whiteSmoke`}>
            <Text className={`${styles.locationLabel} `}>
              Last known location
            </Text>
            <Text className={`${styles.locationName}`}>{location.name}</Text>
          </div>
          {/* <div className={}></div> */}
        </div>
      </div>
    </Card>
  );
}
