import React, { useEffect, useState } from "react";
import "./debounceapicall.css";
import debounceQuery from "./util";
const DebounceApiCall = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const initApiCall = async () => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
   const data = await debounceQuery(url)
   console.log("debounc data",data)
   setList(data)
  };
  useEffect(() => {
    if(input){
        initApiCall(input);
    } 
  }, [input]);
  return (
    <div className="debounce-container">
      Debounce Api Call
      <input type="text" value={input} onChange={handleInputChange} />
      {/* {list} */}
      {list && list.length > 0 && (
        <div className="list">
          {list &&
            list.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </div>
      )}
    </div>
  );
};

export default DebounceApiCall;
