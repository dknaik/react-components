import React, { useEffect, useState } from "react";
import ProgressBarr from "./ProgressBarr";
import "./progressBar.css";
const ProgressComponent = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 20);

    return () => {
      clearInterval(time);
    };
  }, [progress]);
  return (
    <div className="progress-container">
      <ProgressBarr progress={progress} />
      <button onClick={()=>setProgress(0)}>restart</button>

    </div>
  );
};

export default ProgressComponent;
