import React, { useEffect, useState } from "react";
import "./colorguesser.css";
const ColorGuesser = () => {
  const arr = [
    "red",
    "green",
    "yellow",
    "black",
    "brown",
    "blue",
    "aqua",
    "pink",
    "violet",
  ];
  const [color, setColor] = useState("aqua");
  const [colorArr, setColorArr] = useState([]);
  const [count, setCount] = useState(0);
  const selectColor = (val) => {
    if (color !== val) {
      alert("wrong color choosed");
      return;
    }
    setCount((prev) => prev + 3);

    console.log(color);
  };
  useEffect(() => {
    getRandomColors();
  }, [count]);

  const getRandomColors = (val) => {
    if (count >= arr.length) {
      alert("game over");
      return;
    }
    const colorData = arr.slice(count, 3 + count);
    const randomColorIndex = Math.floor(Math.random() * colorData.length);
    setColor(colorData[randomColorIndex]);
    setColorArr(colorData);
  };
  console.log(colorArr);
  return (
    <div className="container-box">
      <div className="color-box-container">
        <div
          className="color-box"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className="btn-container">
          {colorArr.map((val, index) => {
            return (
              <button
                onClick={() => selectColor(val)}
                key={index}
                className="btn"
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorGuesser;
