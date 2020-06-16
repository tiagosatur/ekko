import React from "react";

export default function SearchForm({
  data: { value: term, shakeField },
  actions: { handleChangeTerm, handleSubmitSearch },
}) {
  return (
    <form className="form media">
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
