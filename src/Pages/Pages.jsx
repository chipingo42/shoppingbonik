import React from 'react'
import FlashDeals from '../components/FlashDeals/FlashDeals'
import Home from '../components/Mainpage/Home'
import ToCate from '../components/TopCart/ToCate'
import NewArrivals from '../components/Newarrivals/NewArrivals'
import Discount from '../components/Discount/Discount'
import Shop from '../components/Shops/Shop'
import Annoncement from '../components/Annoncement/Annoncement'
import Wrapper from '../components/Wrapper/Wrapper'
import AllClothes from '../components/Clothe/AllClothes'




const Pages = ({ productItems, addToCart, shopItems, Clothe }) => {
  return (
    <div>
      <Home  />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <ToCate />
      <NewArrivals /> 
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <AllClothes Clothe={Clothe} addToCart={addToCart} />
      <Annoncement />
      <Wrapper />
    </div>
  )
}

export default Pages