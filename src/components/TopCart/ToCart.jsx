import React from 'react'
import Slider from 'react-slick'
import Tdata from './Tdata'
import './style.css'

const ToCart = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {
          Tdata.map((val, i) => (
            <div key={i}> 
              <section className='box product' >
                <div className="nameTop d_flex">
                  <span className='tleft'>{val.para}</span>
                  <span className='tright'>{val.desc}</span>
                </div>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
              </section> 
            </div>
          ))
        }
      </Slider>
    </>
  )
}

export default ToCart




 