import React, { Fragment,useState } from 'react';
import Header from  '../Layout/Header'
import ProductList from '../Products/ProductList'
import Footer from '../Layout/Footer'
import Cart from '../Cart/Cart'
import CartContextProvider from '../../store/CartContextProvider'

const Store = props => {
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
    )

};

export default Store;