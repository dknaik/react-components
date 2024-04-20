import React, { useState } from "react";
import "./stepper.css";
const Stepper = ({ stepperList,setActive,active }) => {
  const progressWidth = (100 / (stepperList.length - 1)) * active;
  return (
    <section className="container">
      <div className="stepper-container">
        <div className="">
          {[...Array(stepperList.length)].map((val, index) => (
            <div
              key={val}
              onClick={() => setActive(index)}
              className={`stepper-dots ${active >= index ? "active" : ""}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div>
          <div
            className="progress-line"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
      <div>{stepperList[active]}</div>
    </section>
  );
};

export default Stepper;
