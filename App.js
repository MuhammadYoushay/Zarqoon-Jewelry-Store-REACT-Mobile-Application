import React from 'react';
import StackNavigator from './Navigation/StackNavigator';
import { CartProvider } from './cartContext';

export default function App() {
  return (
      <CartProvider>
        <StackNavigator />
      </CartProvider>
  );
}



