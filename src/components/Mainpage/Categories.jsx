import React, { useState } from 'react'
import cat1 from '../../assets/category/cat1.png'
import cat2 from '../../assets/category/cat2.png'
import cat3 from '../../assets/category/cat3.png'
import cat4 from '../../assets/category/cat4.png'
import cat5 from '../../assets/category/cat5.png'
import cat6 from '../../assets/category/cat6.png'
import cat7 from '../../assets/category/cat7.png'
import cat8 from '../../assets/category/cat8.png'
import cat9 from '../../assets/category/cat9.png'
import cat10 from '../../assets/category/cat10.png'
import cat11 from '../../assets/category/cat11.png'





const Categories = () => {

  const data = [
    {
      cateImg:  cat1,
      cateName: "Fashion"
    },
    {
      cateImg:  cat2,
      cateName: "Electronic"
    },
    {
      cateImg:  cat3,
      cateName: "Cars"
    },
    {
      cateImg:  cat4,
      cateName: "Home & Garden",
    },
    {
      cateImg:  cat5,
      cateName: "Gifts",
    },
    {
      cateImg: cat6,
      cateName: "Music",
    },
    {
      cateImg: cat7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: cat8,
      cateName: "Pets",
    },
    {
      cateImg: cat9,
      cateName: "Baby Toys",
    },
    {
      cateImg: cat10,
      cateName: "Groceries",
    },
    {
      cateImg: cat11,
      cateName: "Books",
    },
  ]

  return (
    <>
      {/* <div className="categories d_flex" style={{ position: "absolute", top: '130px'}} onClick={() => setCategores(!Category)}>
        <span className="fa fa-border-all"></span>
        <h4>
          Categories {!Category ? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-up"></i> }
        </h4>
      </div> */}
      <section className="category">
        {
          data.map((value, idx) => (
            <div className="box f_flex" key={idx}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>          
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Categories;
