import React from 'react';
import { useCart, addToCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'metbox', price: 10000 },
  { id: 3, name: 'Headphone', price: 20000 },
  { id: 4, name: 'moush', price:30000},
  { id: 5, name: 'headsed', price:40000},
  { id: 6, name: 'mobil', price:50000},
];

const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <div>
      <h2>Daftar Produk</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Harga: Rp{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
