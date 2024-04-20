import React, { useState } from "react";
import UpdatedComponent from "./UpdatedComponent";

const ClickIncrease = (props) => {
  return (
    <div>
      <div style={{ fontSize: `${props.fontSize}px` }}>
        Increasing the size after click
        <button onClick={props.changeFontSize}>
          Click me toincrease the size
        </button>
      </div>
    </div>
  );
};

export default UpdatedComponent(ClickIncrease);
