import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find(item => item._id === product._id);

    if (existingProduct) {
      // Product already exists in the cart, update the quantity
      const updatedCart = cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      // Product is not in the cart, add it with the specified quantity
      setCart(prevCart => [...prevCart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
  };

  const incrementQuantity = (productId, quantity = 1) => {
    const updatedCart = cart.map(item =>
      item._id === productId ? { ...item, quantity: item.quantity + quantity } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId
        ? { ...item, quantity: item.quantity - 1 >= 0 ? item.quantity - 1 : 0 }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0)); // Remove the product if quantity becomes zero
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
