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
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="box">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center </li>
            <li>How to Buy </li>
            <li>Track Your Order </li>
            <li>Corporate & Bulk Purchasing </li>
            <li>Returns & Refunds </li>
          </ul>
        </div>
        <div className='box'>
          <h2>Contact Us</h2>
          <ul>
            <li>70 Washington Square South, New York, NY 10012, United States </li>
            <li>Email: uilib.help@gmail.com</li>
            <li>Phone: +1 1123 456 780</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer