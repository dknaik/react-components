import React, { useCallback, useState } from "react";
import "./debounceinput.css";
const DebounceWork = () => {
  const [search, setSearch] = useState([]);
  const [listItem, setListItem] = useState([]);
  const debounce = (func) => {
    console.log("func", func);
    let timer;
    return function (...args) {
      console.log(...args);
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    const response = await fetch(
      `https://api.frontendeval.com/fake/food/${value}`
    );
    const data = await response.json();
    setListItem(data);
    console.log("data", data);
  };

  const optimizedVersion = useCallback(debounce(handleChange));
  return (
    <div>
      <input
        onChange={optimizedVersion}
        type={"text"}
        name={"search"}
        placeholder={"enter Somethig..."}
      />
      {listItem.map((val) => {
        return <li>{val}</li>;
      })}
    </div>
  );
};

export default DebounceWork;
