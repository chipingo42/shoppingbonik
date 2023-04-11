import React from 'react'
import { FaGooglePlay , FaAppStoreIos } from 'react-icons/fa'
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="container grid2">
        <div className="box">
          <h1>Shoppingbonik</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis, soluta beatae asperiores ipsam doloribus officiis velit a!</p>
          <div className="icon d_flex">
            <div className="img d_flex">
              <FaGooglePlay  className='i'/>
              <span>Google Play</span>
            </div>
            <div className="img d_flex">
              <FaAppStoreIos className='i' />
              <span>App Store</span>
            </div>
          </div>
        </div>

        <div className="box">
          <h2>About Us</h2>
          <div>
            <p>Careers</p>
            <p>Our Stores</p>
            <p>Our Cares</p>
            <p>Terms & Conditions</p>
            <p>Privacy Poplicy</p>
          </div>
        </div>

        <div className="box">
          <h2>Customer Care</h2>
          <div>
            <p>Help Center </p>
            <p>How to Buy </p>
            <p>Track Your Order </p>
            <p>Corporate & Bulk Purchasing </p>
            <p>Returns & Refunds </p>
          </div>
        </div>
        <div className='box'>
          <h2>Contact Us</h2>
          <div>
            <p>70 Washington Square South, New York, NY 10012, United States </p>
            <p>Email: uipb.help@gmail.com</p>
            <p>Phone: +1 1123 456 780</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer