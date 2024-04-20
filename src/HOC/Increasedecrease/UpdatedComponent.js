import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
  const [fontSize, setFontSize] = useState(20);

    return <OriginalComponent name="Dinesh" fontSize={fontSize} changeFontSize={()=>setFontSize(fontSize+1)} />;
  }
  return NewComponent;
};

export default UpdatedComponent;
