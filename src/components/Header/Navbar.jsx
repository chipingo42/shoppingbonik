import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const isAboveScreens = useMediaQuery("(min-width: 768px)");

  return (
    <> 
      <header className='header'>
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink">
            {isAboveScreens ? (
              <ul className="n_flex capitalize">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/pages">pages</Link>
                </li>
                <li>
                  <Link to="/user">User account</Link>
                </li>
                <li>
                  <Link to="/vendor">Vendor account</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>) : ( 
              <button className='toggle' onClick={() => setMobileMenu(!mobileMenu)}>
                {!mobileMenu ?  <Bars3Icon className='bar_open'/> : ''}
              </button>
            )}
          </div>
        </div>
      </header>


      {/* MOBILE */}
      {!isAboveScreens  && mobileMenu && (
        <ul className="n_flex capitalize list ">
          <XMarkIcon className='xMark'  onClick={() => setMobileMenu(!mobileMenu)}/>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/pages">pages</Link>
          </li>
          <li>
            <Link to="/user">User account</Link>
          </li>
          <li>
            <Link to="/vendor">Vendor account</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}

    </> 
  )
}

export default Navbar
