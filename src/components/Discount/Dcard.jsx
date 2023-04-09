import React from 'react'
import Slider from "react-slick";

import Ddata from './Ddata'

const Dcard = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };



  return (
    <>
      <Slider  {...settings}>
        {Ddata .map((val, i) => (
          <div key={i}>
            <div className="product">
              <div className='box'>
                <div className="img">
                  <img src={val.cover} alt="" width="100%" />
                </div>
                <h1>{val.name}</h1>
                <span>{val.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
  
    </>
  )
}

export default Dcard