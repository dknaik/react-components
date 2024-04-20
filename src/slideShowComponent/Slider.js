import React, { useState } from "react";
import "./slider.css"
const img_list = [
  {
    id: 1,
    img_url:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
  {
    id: 2,
    img_url:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
    caption: "Image 5",
  },
  {
    id: 3,
    img_url:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710201600&semt=ais",
    caption: "Image 5",
  },
  {
    id: 4,
    img_url:
      "https://w0.peakpx.com/wallpaper/42/267/HD-wallpaper-nature-scenery-scenery-nature.jpg",
    caption: "Image 5",
  },
  {
    id: 5,
    img_url:
      "https://wallpapers.com/images/featured/scenery-4nho1u78dzvt1meo.jpg",
    caption: "Image 5",
  },
  {
    id: 6,
    img_url:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
];
const Slider = () => {
    const [active,setActive]=useState(1)
    const changeSlides = (id)=>{
  setActive(id)
    }
  return (
    <div className="slider-container">
      <div className="slides">
        {img_list.map((val) => (
          <Slides img_url={val.img_url} caption={val.caption} active={active==val.id} />
        ))}
      </div>
      <div className="navigation-container">
      {img_list.map((val)=>{  
      return <div className={`navigation-btns ${active==val.id?"active":""}`} onClick={()=>changeSlides(val.id)}></div>
      })}
      </div>
    </div>
  );
};

const Slides = ({ img_url, caption,active }) => {
    console.log("active",active)
  return (
    <>
      <div className="slides-container">
        <img className={active?"active":""}  src={img_url} caption={caption}></img>
      </div>
    </>
  );
};

export default Slider;

 
