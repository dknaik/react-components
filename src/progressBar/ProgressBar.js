import React, { useEffect, useState } from "react";
import "./progressbar.css";

const ProgressComp = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percent > 50 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
};

const ProgressBar = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="progress-container">
      <span>Progress bar</span>
      <ProgressComp value={value} />
    </div>
  );
};

export default ProgressBar;
