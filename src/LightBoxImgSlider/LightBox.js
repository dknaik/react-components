import React, { useEffect, useState } from "react";
import "./lightbox.css";
import Modal from "../Modal/Modal";
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
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
  {
    id: 3,
    img_url:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
  {
    id: 4,
    img_url:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
  {
    id: 5,
    img_url:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
  {
    id: 6,
    img_url:
      "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
    caption: "Image 5",
  },
];

const LightBox = () => {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    setActive(id);
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
  };
  const onNext = () => {
    if (active < img_list.length) {
      setActive(active + 1);
    }
  };
  const onPrev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };
  return (
    <>
      <div className="image-listig">
        {img_list?.map((val) => {
          return (
            <div
              key={val.id}
              className={val.id == active ? "active" : ""}
              onClick={() => handleClick(val.id)}
            >
              <img src={val.img_url} alt={val.caption}></img>
            </div>
          );
        })}
      </div>
      <Modal show={show} title="LightBox" closeHandler={closeHandler}>
        <ImageSlider onNext={onNext} onPrev={onPrev} active={active} />
      </Modal>
    </>
  );
};

const ImageSlider = ({ active, onNext, onPrev }) => {
  return (
    <div className="image-slider-wrapper">
      <div className="image-slides">
        {img_list.map((e, i) => (
          <Slides
            key={e.caption}
            active={e.id == active}
            caption={e.caption}
            img_url={e.img_url}
          />
        ))}
      </div>
      <div className="image-slider-navigation">
        <span className="img-navigation next" onClick={onNext}>
          &gt;
        </span>
        <span className="img-navigation prev" onClick={onPrev}>
          &lt;
        </span>
      </div>
    </div>
  );
};

const Slides = ({ img_url, caption, active }) => {
  console.log("img_url",img_url)
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  },[]);
  return (
    <div className={`image-slide`}>
      {loader ? (
        "Loading"
      ) : (
        <>
        {active}
        <img
          src={img_url}
          alt={caption}
          className={active ? "active" : ""}
        ></img>
        </>
      )}
    </div>
  );
};

export default LightBox;
