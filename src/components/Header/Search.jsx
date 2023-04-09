import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ CartItem }) => {

  window.addEventListener('scroll', () => {
    const search = document.querySelector('.search')
    search.classList.toggle("active",  window.scrollY > 100)
  })

  return (
    <section className='search'>
      <div className="container c_flex">
        <Link to="/" className="logo width">
          <i>Shoppingbonik</i>
        </Link>

        <div className="search_box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder='Search and hit enter....' />
          <span>All Category</span>
        </div>

        <div className="icon f_flex width">
          <i className="fa fa-user icon_circle"></i>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon_circle"></i>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search