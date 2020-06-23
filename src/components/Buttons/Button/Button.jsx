import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  label,
  handleClick,
  primary,
  contained,
  outlined,
  children,
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        contained ? styles.contained : ""
      } ${outlined ? styles.outlined : ""}`}
    >
      {label}

      {children}
    </button>
  );
}
