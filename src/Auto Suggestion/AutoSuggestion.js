import React, { useEffect, useRef, useState } from "react";
import "./autosuggestion.css";
const AutoSuggestion = () => {
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const inputRef=useRef()
  const suggAreaRef=useRef()
  const [suggestionAreaVisible, setSuggestionAreaVisible] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const result = await fetch("http://localhost:8000/users");
    const data = await result.json();
    setData(data);
    console.log("result", data);
  };

  useEffect(()=>{
    window.addEventListener('click',(e)=>{
        if(e.target!==inputRef.current && e.target!==suggAreaRef.current){
           console.log("hello")
            setSuggestionAreaVisible(false)
        }
    })

    return ()=>{
        window.removeEventListener('click',()=>{})
    }
  })

  const handleSearch = (e) => {
      if (e.target.value) {
        setSuggestionAreaVisible(true)
      console.log("e.target.value", e.target.value, searchText);
      setSearchText(e.target.value);
      const result = data
        .map((val) => val.name.toLowerCase())
        .filter((val) => val.includes(searchText));
      setSearchResult(result);
      console.log(result);
    } else {
      setSearchResult([]);
      setSearchText("");
      setSuggestionAreaVisible(false)

    }
  };
  return (
    <div className="auto-sugg-container">
      <input
      ref={inputRef}
        type="text"
        name="search"
        placeholder="search"
        id="search"
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />
      { suggestionAreaVisible &&  <div className="suggestion-area" ref={suggAreaRef}>
        {searchResult.map((Val) => (
          <li onClick={() => setSearchText(Val)}>{Val}</li>
        ))}
      </div>}
     
    </div>
  );
};

export default AutoSuggestion;
