import React from 'react'
import banner1 from '../../assets/banner-1.png'
import banner2 from '../../assets/banner-2.png'

const Annoncement = () => {

  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  

  return (
    <>
      <section className='annocenmemt background'>
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src={banner1} alt=""  width="100%" height="100%" />
          </div>
          <div className="img" style={mystyle1}>
            <img src={banner2} alt=""  width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annoncement