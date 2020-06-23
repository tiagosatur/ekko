import React from "react";
import styles from "./IconButton.module.scss";

export default function IconButton({
  handleClick,
  primary,
  contained,
  outlined,
  children,
  title,
}) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      title={title}
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        contained ? styles.contained : ""
      } ${outlined ? styles.outlined : ""}`}
    >
      {children}
    </button>
  );
}
