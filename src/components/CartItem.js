import React, { useState } from 'react';
import './CartItem.css';
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Harga: Rp{item.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={onRemove}>Hapus</button>
      <p>Total: Rp{item.price * quantity}</p>
    </div>
  );
};

export default CartItem;
