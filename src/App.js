import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import ProductList from './components/Products/ProductList';
import Footer from './components/Layout/Footer';

import './App.css';

function App() {
  return (
   <Fragment>
    <Header />
   
    <ProductList />
    
    <footer>
      <Footer />
    </footer>
   </Fragment>
  );
}

export default App;
