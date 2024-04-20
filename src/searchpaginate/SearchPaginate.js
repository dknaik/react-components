import React, { useEffect, useState } from "react";
import "./searchpaginate.css"
const SearchPaginate = () => {
 const URL = "https://api.punkapi.com/v2/beers"
  const [beers, setBeers] = useState([]);
  const makApiCall = async () => {
    try {
        let res = await fetch(URL);
        res = await res.json()
        console.log(res)
        setBeers(res)
    } catch (e) {
        console.error("error while calling the api",e)
    }
  };

  useEffect(()=>{
    makApiCall()
  },[])
   return (
    <div className="App">
        <h1>Beers List</h1>
        {beers.map((val)=><Beer key={val.name} image_url={val.image_url} tagline={val.tagline} name={val.name} />)}
    </div>
   );
};

const Beer = ({ image_url, tagline, name }) => {
  return (
    <div className="beer">
      <div className="img-container">
        <img src={image_url} alt={name}></img>
      </div>
      <div className="name-tagline">
        <h2>{name}</h2>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default SearchPaginate;
