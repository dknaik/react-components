import React, { useState } from "react";
import { useFetch } from "./useFetch";
const SearchBox = ({
  id,
  name,
  label,
  placeholder,
  autoComplete,
  maxItems,
  styles,
  debouncewait,
  listBox,
  noItemMessage,
  errorMessage,
  transformData,
  promise,
}) => {
  const [query, setQuery] = useState("");
  const [data, setData, error] = useFetch(
    query,
    transformData,
    promise,
    debouncewait,
    autoComplete
  );
  console.log("dataaa", data);
  const handlChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <label className={styles.label} for={name}>
        {label}
      </label>
      <br />
      <input
        name={name}
        className={styles.input}
        id={id}
        value={query}
        onChange={handlChange}
        placeholder={placeholder}
      />
      {data && data.length > 0 && listBox(data)}
      {JSON.stringify(error)}
    </div>
  );
};

export default SearchBox;
