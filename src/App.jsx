import React, { useState } from 'react';
import Header from './components/Layout/header/header';
import Meals from './components/Meals/meals';
import Cart from './components/Cart/cart';
import CartProvider from './Context/contextProvider';

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCarthandler = () => {
    setShowCart(true)
  };

  const HideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={HideCartHandler}/>}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
