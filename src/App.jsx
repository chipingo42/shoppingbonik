import Header from "./components/Header/Header";
import './App.css'
import Data from "./components/FlashDeals/Data";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pages from "./Pages/Pages";
import Cart from './components/Cart/Cart'
import Sdata from './components/Shops/Sdata'
import Footer from "./components/Footer/Footer";


function App() {

  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [CartItem, setCartItem] = useState([])


  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id? {...productExit, qty: productExit.qty - 1} : item)))
    }
  }



  return (
    <div>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}  />}></Route>
          <Route path='/cart' exact element={ <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        </Routes>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;