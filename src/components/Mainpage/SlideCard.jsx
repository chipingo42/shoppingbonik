import React from 'react'
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    appendDots: (dots) => (
      <ul style={{ margin: '0px'}}>{dots}</ul>
    )
  };


  return (
    <>
      <Slider {...settings}> 
        {
          Sdata.map((val, i) => {
            return (
              <div key={i} className="box top">
                <div className="left">
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                  <button className="btn-primary">Visit Cellections</button>
                </div>
                <div className="right">
                  <img src={val.cover } alt="" />
                </div>
              </div>
            )
          })
        }
      </Slider>
    </>
  )
}

export default SlideCard