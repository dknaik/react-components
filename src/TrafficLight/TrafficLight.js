import React, { useEffect, useRef, useState } from "react";
import "./trafficlight.css";

const trafficLight = [
  {
    id: 1,
    color: "green",
    nextLight: 1,
    delay:2000
  },
  {
    id: 1,
    color: "yellow",
    nextLight: 2,
    delay:2000
  },
  {
    id: 1,
    color: "red",
    nextLight: 0,
    delay:2000
  },
];

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);
  const stopLight = useRef(null);
  useEffect(() => {
    trafficLightFun();
  }, [activeLight]);
  const trafficLightFun = () => {
    stopLight.current = setTimeout(() => {
      setActiveLight(trafficLight[activeLight]?.nextLight);
    }, trafficLight[activeLight].delay);
  };
  const holdLight = () => {
    clearTimeout(stopLight.current);
  };
  const resumeLight = () => {};
  return (
    <div className="trafic-light-container">
      {trafficLight.map((val, index) => (
        <div
          key={index}
          className="lights"
          style={{ background: activeLight == index ? val.color : "white" }}
        >
        </div>
      ))}

      <button onClick={() => holdLight()}>Stop Light</button>
      <button onClick={() => trafficLightFun()}>Resume Light</button>
    </div>
  );
};

export default TrafficLight;
