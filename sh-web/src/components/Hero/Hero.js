import React, { useState,useEffect } from "react";
import "../../styles/Hero.css";
import {carouselImages} from '../data';

function Hero() {
  const [imgUrl, setImgUrl] = useState(0);
  const [progress, setProgress] = useState(true);

  

  useEffect(() => {
    const interval = setInterval(next,3000);

    return () => clearTimeout(interval);


  }, [imgUrl]);

  const startProgress = () =>
  {

    if(progress)
    {
      document.querySelector(".progress").style.width = "100%";
      setProgress(false);
    }
    else{
      document.querySelector(".progress").style.width = "0%";
      setProgress(true);
    }

  }

  const previous = _ => {
    startProgress();
    if (imgUrl > 0) {
      setImgUrl(imgUrl - 1);
    } else {
      setImgUrl(carouselImages.length - 1);
    }
  
    
  };
  const next = _ => {
    startProgress();
    if (imgUrl < carouselImages.length - 1) {
      setImgUrl(imgUrl + 1);
    }
    else {
      setImgUrl(0);
    }
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <h3>SH Constructions</h3>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maiores, repudiandae?
        </p>
        <div className="progressContainer">
    <div className="progress"></div>
</div>
      </div>
      <div className="slides">

      <img
        src={carouselImages[0]}
        alt=""
        style={{opacity: imgUrl === 0 ? 1 : 0}}
        />
      <img
        
        src={carouselImages[1]}
        alt=""
        style={{opacity: imgUrl === 1 ? 1 : 0}}
      />
      <img
        src={carouselImages[2]}
        alt=""
        style={{opacity: imgUrl === 2 ? 1 : 0}}
        />
      <img
        src={carouselImages[3]}
        alt=""
        style={{opacity: imgUrl === 3 ? 1 : 0}}
        />
        </div>


      <div className="left" onClick={previous}>
        <i className="fas fa-chevron-left left-own-arrow"></i>
      </div>
      <div className="right" onClick={next}>
        <i className="fas fa-chevron-right right-own-arrow"></i>
      </div>
    
    </div>
  );
}

export default Hero;
