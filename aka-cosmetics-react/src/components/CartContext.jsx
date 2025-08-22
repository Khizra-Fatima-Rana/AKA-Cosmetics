// components/CartContext.jsx
import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item => item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name) =>
    setCartItems(prev => prev.filter(item => item.name !== name));

  const updateQuantity = (name, delta) =>
    setCartItems(prev => prev.map(item =>
      item.name === name
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
