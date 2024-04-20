import React, { useEffect, useState } from "react";
import "./countdown.css";

const CountDownTimer = () => {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [disableBtn, setDisableBtn] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const handleStart = () => {
    setIsStart(true);
  };
  const ResetHandler = () => {
    setIsStart(false);
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(timerId)
  };

  const RunTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (min > 0 && sec == 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (hr > 0 && min == 0 && sec == 0) {
      setMinutes(59);
      setHours((h) => h - 1);
      setSeconds(59);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };
  const handleResume = ()=>{
    setIsPaused(false)
    RunTimer(seconds,minutes,hours)
  }
  useEffect(() => {
    if (hours != 0 || minutes != 0 || seconds != 0) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [hours, minutes, seconds]);


  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        RunTimer(seconds, minutes, hours, tid);
      }, 1000);
      console.log("tid", tid);
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);
  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    const value = +e.target.value;
    const id = e.target.id;
    if (id == "hours") {
      setHours(value);
    }
    if (id == "minutes") {
      setMinutes(value);
    }
    if (id == "seconds") {
      setSeconds(value);
    }
  };
  console.log("hours", hours, minutes, seconds);

  return (
    <div className="container">
      <h1>Count Down timer</h1>

      {!isStart && (
        <div className="input-container">
          <div className="input-box">
            <input onChange={handleInput} id="hours" placeholder="HH" />
            <input onChange={handleInput} id="minutes" placeholder="MM" />
            <input onChange={handleInput} id="seconds" placeholder="SS" />
          </div>
          <button
            style={{ backgroundColor: disableBtn ? "gray" : "purple" }}
            disabled={disableBtn}
            onClick={handleStart}
            className="timer-button "
          >
            Start
          </button>
        </div>
      )}

      {isStart && (
        <div className="show-container">
          <div className="timer-box">
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <div>:</div>

            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>

            <div>:</div>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>

          <div className="action-box">
            {!isPaused &&  <button className="timer-button" onClick={handlePause}>
              Pause
            </button> }
            {isPaused &&  <button className="timer-button" onClick={handleResume}>
              Resume
            </button> }


           
            <button className="timer-button" onClick={ResetHandler}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
