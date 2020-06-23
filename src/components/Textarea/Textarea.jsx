import React from "react";
import { uniqueId } from "../../utils";
import styles from "./Textarea.module.scss";

export default function Textarea({ label, name, register, disabled }) {
  const uid = uniqueId();
  return (
    <div className={styles.field}>
      <label htmlFor={uid} className={styles.label}>
        {label}
      </label>
      <textarea
        id={uid}
        ref={register}
        name={name}
        className={styles.textarea}
        disabled={disabled}
      />
    </div>
  );
}
