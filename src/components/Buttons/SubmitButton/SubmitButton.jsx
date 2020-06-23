import React from "react";
import styles from "./SubmitButton.module.scss";

export default function Button({
  label,
  handleClick,
  primary,
  contained,
  outlined,
}) {
  return (
    <input
      type="submit"
      // onClick={handleClick}
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        contained ? styles.contained : ""
      } ${outlined ? styles.outlined : ""}`}
      value={label}
    />
  );
}
