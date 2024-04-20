import React, { useState } from "react";
import "./tabs.css";
const tabs = ["TAB 1", "TAB 2", "TAB 3"];
const pannels = [Pannel1, Pannel2, Pannel3];
function Pannel1() {
    return <>Pannel 1</>;
  }
  function Pannel2() {
    return <>Pannel 2</>;
  }
  function Pannel3() {
    return <>Pannel 3</>;
  }
const TabsComp = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const changeTabs = (index) => {
    console.log("index", index);
    setTabIndex(index);
  };



  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((val, index) => {
          return (
            <div
              className="each-tabs"
              onClick={() => changeTabs(index)}
              key={val}
            >
              {val}
            </div>
          );
        })}
      </div>

      <div className="pannel">{React.createElement(pannels[tabIndex])}</div>
    </div>
  );
};

export default TabsComp;
