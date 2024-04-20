import React, { useEffect, useState } from "react";

const InfiniteScrollSimple = () => {
  const [count, setCount] = useState(50);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(i);
  }
  console.log("elements", elements);

  useEffect(() => {
    const onscroll =()=>{
        console.log(window.scrollY)
        if(window.innerHeight + window.scrollY > window.document.body.offsetHeight - 30) {
             console.log("true")
             setCount((prevCount)=>prevCount+50)
        }
    }
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return (
    <>
      {elements.map((val, index) => (
        <div key={index}>{val}</div>
      ))}
    </>
  );
};

export default InfiniteScrollSimple;
