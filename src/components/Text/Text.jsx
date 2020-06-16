import React from "react";
import style from "./Text.module.scss";

export default function Text({ className, children }) {
  return <p className={`${style.text} ${className || ""}`}>{children}</p>;
}
