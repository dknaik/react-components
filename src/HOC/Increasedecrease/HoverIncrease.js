import React, { useState } from "react";
import UpdatedComponent from "./UpdatedComponent";

const HoverIncrease = (props) => {
  return (
    <div>
      <div style={{ fontSize: `${props.fontSize}px` }}>
        Increasing the size after click {props.name}
        <button onMouseOver={props.changeFontSize}>
          Click me toincrease the size
        </button>
      </div>
    </div>
  );
};

export default UpdatedComponent(HoverIncrease);
