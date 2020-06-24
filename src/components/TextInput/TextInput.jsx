import React from "react";
import { uniqueId } from "../../utils";
import styles from "./TextInput.module.scss";

export default function TextInput({
  label,
  name,
  register,
  disabled,
  className,
  children,
}) {
  const uid = uniqueId();
  return (
    <div className={`${styles.field} ${className}`}>
      {label && (
        <label htmlFor={uid} className={styles.label}>
          {label}
        </label>
      )}
      {children}
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
