import React, { useState } from 'react'




const FlashCard = ({ shopItems, addToCart }) => {


  const [count, setCount] = useState(0)
  const inCreament = () => {
    setCount(count + 1)
  }


  return (
    <>
      {shopItems.map((shopItem) => {
        return (
          <div className="box" key={shopItem.id}>
            <div className="product mtop">
              <div className="img">
                <span className='discount'> {shopItem.discount}% off</span>
                <img src={shopItem.image} alt="" />
                <div className="product_like">
                  <label>{count}</label> <br />
                  <i className="fa fa-heart" onClick={inCreament}></i>
                </div>
              </div>
              <div className="product_details">
                <h3>{shopItem.title}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{shopItem.price} .00</h4>
                  <button onClick={() => addToCart(shopItem)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default FlashCard