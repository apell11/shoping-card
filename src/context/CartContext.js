import React, { createContext, useReducer, useContext } from 'react';

// Inisialisasi state awal untuk keranjang
const initialState = {
  cart: [],
  totalPrice: 0
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Reducer untuk mengelola state keranjang
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    default:
      return state;
  }
}

// Context untuk Cart
const CartContext = createContext();

// Custom hook untuk menggunakan CartContext
export const useCart = () => useContext(CartContext);

// Provider untuk CartContext
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId }
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: productId, quantity }
});
