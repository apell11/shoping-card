import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/productList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
