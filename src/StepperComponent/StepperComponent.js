import React, { useState } from "react";
import Stepper from "./Stepper";

const StepperComponent = () => {
  const stepperList = ["CompOne", "CompTwo", "CompThree", "CompFour"];

  const [active, setActive] = useState(0);

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const handleNext = () => {
    if (active < stepperList.length - 1) {
      setActive(active + 1);
    }
  };
  return (
    <>
      <Stepper
        stepperList={stepperList}
        active={active}
        setActive={setActive}
      />

      <div className="controllers">
        <button onClick={() => handlePrev()}>Prev</button>
        <button onClick={() => handleNext()} handle>
          Next
        </button>
      </div>
    </>
  );
};

const CompOne = () => {
  return (
    <>
      <h1>Component 1</h1>
    </>
  );
};
const CompTwo = () => {
  return (
    <>
      <h1>Component 1</h1>
    </>
  );
};
const CompThree = () => {
  return (
    <>
      <h1>Component 1</h1>
    </>
  );
};
const CompFour = () => {
  return (
    <>
      <h1>Component 1</h1>
    </>
  );
};

export default StepperComponent;
