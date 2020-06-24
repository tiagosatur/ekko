import React from "react";
import { BsSearch } from "react-icons/bs";
import { TextInput } from "../..";
import styles from "./SearchForm.module.scss";

export default function SearchForm({
  actions: { register, handleSubmit, handleSubmitSearch },
}) {
  return (
    <form
      onSubmit={handleSubmit(handleSubmitSearch)}
      className={styles.searchForm}
    >
      <TextInput register={register} name="term" className={styles.input}>
        <button type="submit" className={styles.button}>
          <BsSearch />
        </button>
      </TextInput>
    </form>
  );
}
