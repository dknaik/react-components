import React, { useEffect, useState } from "react";
import "../styles/timer.css";
const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [stpTimer,setStpTimer]=useState(false)
  let intervalId 
  useEffect(() => {});
  const startTimer = () => {
    console.log("timer started");
  
    intervalId = setInterval(() => {
      if (hour > 0 && !stpTimer) {
        setHour((prev) => prev - 1);
      } else {
        clearInterval(intervalId); // Move clearInterval outside setHour callback
        setHour(0);
      }
    }, 1000);
  };

  const stopTimer= ()=>{
    setHour(0)
    setStpTimer(true)
clearInterval(intervalId)
  }
  return (
    <div className="container">
      <div className="d-flex">
        <p>Hour</p>
        <p>Minute</p>
        <p>Second</p>
      </div>
      <div className="d-flex">
        <input
          name="hour"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          type="number"
        />
        <input
          name="minute"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          type="number"
        />
        <input
          name="second"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          type="number"
        />
      </div>
      <div className="d-flex my-2">
        <button onClick={() => startTimer()}>start</button>
        <button onClick={() => stopTimer()}>stop</button>
        <button>reset</button>
      </div>
      {hour}
    </div>
  );
};

export default Timer;
