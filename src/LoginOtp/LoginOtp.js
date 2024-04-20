import React, { useEffect, useRef, useState } from "react";
import "./loginotp.css";
const LoginOtp = () => {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  console.log("refs", refs);
  const [inputs, setInputs] = useState(emptyArr);
  const [missing,setMissing]=useState(emptyArr)
  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleChange = (e, index) => {
    const val = e.target.value;
    console.log(val, index);
    console.log(inputs);
    if (!Number(val)) {
      return;
    }

    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    console.log("copyInputs", copyInputs);
    copyInputs[index] = val;
    // const updatedInputs = {...inputs,[index]:val}
    setInputs(copyInputs);
  };
  console.log(inputs);
  const handleOnKeyDown = (e,index)=>{
    console.log("handle on key")  
    console.log(e.keyCode,index)
    if(e.keyCode===8){
        const copyInputs = [...inputs]
        copyInputs[index]=''
        setInputs(copyInputs)
        if(index>0){
        refs[index-1].current.focus()
        }
    }
  }

  const handlePaste = (e)=>{
    const data = e.clipboardData.getData('text')
      console.log('pase data',data) 
      if(!Number(data) || data.length!=inputs.length)
      return;

      const pastCode = data.split('')
      setInputs(pastCode)
      refs[inputs.length-1].current.focus()
  }

  const handleSubmit = ()=>{
    console.log("submit")
   const missedVal= inputs.map((item,i)=>{
    if(item==''){
        return i
    }
   }).filter((val)=>val!=undefined)
   setMissing(missedVal)
   console.log("missed val",missedVal)
  }
  return (
    <div className="loginotp">
      <h1>Two-factor code input</h1>

      <div>
        {emptyArr.map((item, i) => {
          return (
            <input
              value={inputs[i]}
              key={i}
              ref={refs[i]}
              onChange={(e) => handleChange(e, i)}
              type="text"
              maxLength={1}
              onKeyDown={(e)=>handleOnKeyDown(e,i)}
              onPaste={handlePaste}
              className={missing.includes(i)?"error":''}
            />
          );
        })}
      </div>
      <button onClick={()=>handleSubmit()}>Submit</button>
    </div>
  );
};

export default LoginOtp;
