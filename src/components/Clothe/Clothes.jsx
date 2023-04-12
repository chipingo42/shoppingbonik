import React, { useState } from 'react'

const Clothes = ({ Clothe, addToCart }) => {

  const [count, setCount] = useState(0)
  const inCreament = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className="box f_wrap">
        {
          Clothe.map((clothes) => {
            return (
              <div className="clothes mtop" key={clothes.id}>
                <div className="img">
                  <span className='discount'>{clothes.rating.rate}% off</span>
                  <img src={clothes.image} alt="" />
                  <div className="product_like">
                    <label>{count}</label> <br />
                    <i className="fa fa-heart" onClick={inCreament}></i>
                  </div>
                </div>
                <div className="product_details">
                  <h3>{clothes.title.slice('', 20)}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{clothes.price}</h4>
                    <button onClick={() => addToCart(clothes)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Clothes