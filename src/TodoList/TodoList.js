import React, { useEffect, useRef, useState } from "react";
import "./todolist.css";
const dataItem = [
  {
    id: 1,
    text: "This is a text1",
  },
  {
    id: 2,
    text: "This is a text2",
  },
];
const TodoList = () => {
  const [data, setData] = useState(dataItem);
  const [text, setText] = useState("");
  const [updateVal, setUpdateVal] = useState("");
  const todosContainerRef =useRef(null)
  const [checkInput, setCheckInput] = useState(0);
  const setDataHandler = (e) => {
    setText(e.target.value);
  };
//   console.log("ref",ref)

  const addText = () => {
    console.log("text", text);
    setData((prevData, newData) => {
      console.log(prevData);
      return [...prevData, { id: Date.now(), text: text }];
    });
    setUpdateVal(text)
    setText("")
  };

  useEffect(()=>{
    console.log("affect")
   const handleClickOutside = (event)=>{
    if(todosContainerRef.current && !todosContainerRef.current.contains(event.target))
    {
        console.log("clicked outside")
        // setCheckInput(0)
    }else{
        return
    }
    
   }

    document.addEventListener("click",handleClickOutside)
    return () => {
        document.removeEventListener("click", handleClickOutside);
      };
  },[checkInput])

  const onSetCheck = (id) => {
    console.log("id", id);
    // setUpdateVal(text)
    setCheckInput(id);
  };

  const deleteHandler = (id)=>{
    const res= data.filter((val)=>val.id!=id)
    setData(res)
  }
  return (
    <div className="todos-container" ref={todosContainerRef}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setDataHandler(e)}
        />
        <button onClick={() => addText()}>Add</button>
      </div>

      {data?.map((val) => {
        return (
          <div  key={val.id} className="list-container">
            <div>
                <List
                  item={val.text}
                  onSetCheck={onSetCheck}
                  checkInput={checkInput}
                  textId={val.id}
                  setData={setData}
                  data={data}
                  setCheckInput={setCheckInput}
                  updateVal={updateVal}
                  setUpdateVal={setUpdateVal}
                />
            </div>

            <div onClick={()=>deleteHandler(val.id)}>&#x2715;</div>
          </div>
        );
      })}
    </div>
  );
};

const List = ({
  item,
  onSetCheck,
  checkInput,
  textId,
  data,
  setData,
  setCheckInput,
  updateVal,
  setUpdateVal
}) => {
  console.log("item", item);
  const [strike,setStrike]=useState(false)

  const handleUpdate = (e) => {
    console.log("abc", e.target.value);
    setUpdateVal(e.target.value);
  };

  const updatedVal = (textId) => {
    console.log("updated value", updateVal);
    const updatedData = data.map((val) => {
      if (val.id == textId) {
        return { ...val, text: updateVal };
      }
      return val;
    });
    setData(updatedData);
    setCheckInput(0);
  };
  const handleStrike=()=>{
    setStrike(!strike)
   }
  return (
    <>
    <div>
    <div className="status" onClick={()=>handleStrike()}></div>
      {checkInput == textId ? (
        <>
          <div>
            <input value={updateVal} onChange={(e) => handleUpdate(e)} />
            <button onClick={() => updatedVal(textId)}>Add</button>
          </div>
        </>
      ) : (
        <>

          <p className={`text ${strike?"strike":""}`}  onClick={() => onSetCheck(textId)}>{item}</p>
        </>
      )}
    </div>
   
    </>
  );
};
export default TodoList;
