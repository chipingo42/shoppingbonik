
import React from 'react'
import './Cart.css'

const Cart = ({ CartItem, addToCart, decreaseQty }) => {

  const totalPrice = CartItem.reduce((price,item) => price + item.qty * item.price, 0 )


  return (
    <>
      <section className='cart-items'>
        <div className="container d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && <h1 className='no_items product'>No Items are add in Cart</h1>}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty
              return (
                <div className="cart_list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span> 
                    </h4>
                  </div>
                  <div className="cat-item-function">
                    {/* <div className="removeCart">
                      <button onClick={() => decreaseQty(item.qty)}>
                        <XMarkIcon />
                      </button>
                    </div> */}
                    <div className="cartControl d_flex">
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div> 
                </div>
              )
            })}   
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price : </h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart