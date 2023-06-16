import React, { Fragment,useState } from 'react';
import Header from './components/Layout/Header';
import ProductList from './components/Products/ProductList';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

import './App.css';

function App() {

  const [isOpen, setISOpen] = useState(false);

  const openCart = () => {
    setISOpen(true);
  }

  const closeCart = () => {
    setISOpen(false);
  }
  return (
   <CartContextProvider>
    {isOpen && <Cart onOpen={openCart} onClose={closeCart} /> }
    <Header onOpen={openCart}/>
   
    <ProductList />
    
    <footer>
      <Footer />
    </footer>
   </CartContextProvider>
  );
}

export default App;
