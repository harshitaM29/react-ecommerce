import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import ProductList from './components/Products/ProductList';

import './App.css';

function App() {
  return (
   <Fragment>
    <Header />
    <ProductList />
   </Fragment>
  );
}

export default App;
