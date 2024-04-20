import React, { useState } from "react";
import "./faq.css";

const questionBank = [
  {
    id: 1,
    q: "What is your name?",
    a: "My name is Ganesh",
  },
  {
    id: 2,
    q: "What is your name?",
    a: "My name is Ganesh",
  },
  {
    id: 3,
    q: "What is your name?",
    a: "My name is Ganesh",
  },
];
function FaqComp() {
  const [show, setShow] = useState(null);
  const showAnswer = (index) => {
    setShow(index);
  };
  return (
    <div className="faq-container">
      <div className="faq-inner-container">
        {questionBank.map((val, index) => {
          return (
            <div  key={index}>
              <p onClick={() => showAnswer(index)}>
                <div className="question-container">
                  {show == index ? (
                    <div className={` arrow ${show === index ? "rotate-90" : "0"}`}>
                      {" "}
                      &gt;
                    </div>
                  ) : (
                    <div>&gt;</div>
                  )}
                  {val.q}
                </div>
              </p>
              <p className={`answers ${index == show ? "active" : ""}`}>
                {val.a}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaqComp;
