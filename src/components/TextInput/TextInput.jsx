import React from "react";
import { uniqueId } from "../../utils";
import styles from "./TextInput.module.scss";

export default function TextInput({ label, name, register, disabled }) {
  const uid = uniqueId();
  return (
    <div className={styles.field}>
      <label htmlFor={uid} className={styles.label}>
        {label}
      </label>
      <input
        id={uid}
        type="text"
        ref={register}
        name={name}
        className={styles.input}
        disabled={disabled || false}
      />
    </div>
  );
}
