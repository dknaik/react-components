import React from "react";
import Input from "./Input.js";
const RenderPropComp = () => {
  return (
    <div>
      <Input renderTextBelow={(value) => <>This value is {value}</>} />

      <br/>
      <Input renderTextBelow={(value) => <>This value is {value * 10}</>} />

    </div>
    
  );
};

export default RenderPropComp;
