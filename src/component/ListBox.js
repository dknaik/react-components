import React from "react";

const ListBox = ({ items }) => {
    console.log("items list box",items)
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ListBox;
