import React from "react";
import { Text } from "..";
import styles from "./Status.module.scss";

export default function Status({ status, species }) {
  return (
    <Text className={`${styles.characterStatus} dFlex flexCenterY white`}>
      <span
        className={` ${styles.statusCircle} ${
          status === "Alive"
            ? "bgGreen"
            : status === "Dead"
            ? "bgRed"
            : "bgWhite"
        }`}
      />
      {status} - {species}
    </Text>
  );
}
