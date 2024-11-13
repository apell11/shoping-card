import React from 'react';
import { useCart, removeFromCart, updateQuantity } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity(id, quantity));
  };

  return (
    <div>
      <h2>Keranjang Belanja</h2>
      <div>
        {cart.length === 0 ? (
          <p>Keranjang belanja Anda kosong.</p>
        ) : (
          cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => dispatch(removeFromCart(item.id))}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))
        )}
      </div>
      <div>
        <h3>Total: Rp{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
      </div>
    </div>
  );
};

export default Cart;
