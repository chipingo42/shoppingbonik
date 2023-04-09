import React from 'react'
import img1 from '../../assets/category/cat-1.png'
import img2 from '../../assets/category/cat-2.png'

const Catg = () => {

  const data = [
    {
      cateImg: img1,
      cateName: "Apple",
    },
    {
      cateImg: img2,
      cateName: "Samasung",
    },
    {
      cateImg: img1,
      cateName: "Oppo",
    },
    {
      cateImg: img2,
      cateName: "Vivo",
    },
    {
      cateImg: img1,
      cateName: "Redimi",
    },
    {
      cateImg: img2,
      cateName: "Sony",
    },
  ]

  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div> 
    </>
  )
}

export default Catg