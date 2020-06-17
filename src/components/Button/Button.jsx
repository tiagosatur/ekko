import React from "react";
import styles from "./Button.module.scss";

export default function Button({ label, handleClick }) {
  return (
    <button type="submit" onClick={handleClick} className={styles.button}>
      {label}
    </button>
  );
}
