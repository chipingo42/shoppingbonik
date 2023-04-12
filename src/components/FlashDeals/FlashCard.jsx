import React, { useState } from 'react'
import Slider from 'react-slick/lib/slider';



const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control_btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
};

const PrevtArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control_btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
};


const FlashCard = ({ productItems, addToCart }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevtArrow />
  };

  const [count, setCount] = useState(0)
  const inCreament = () => {
    setCount(count + 1)
  }


  return (
    <>
      <Slider {...settings}>
        {productItems.map((products) => {
          return (
            <div className="box" key={products.id}>
              <div className="product mtop">
                <div className="img">
                  <span className='discount'> {products.discount}% off</span>
                  <img src={products.image} alt="" />
                  <div className="product_like">
                    <label>{count}</label> <br />
                    <i className="fa fa-heart" onClick={inCreament}></i>
                  </div>
                </div>
                <div className="product_details">
                  <h3>{products.title}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{products.price} .00</h4>
                    <button onClick={() => addToCart(products)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard