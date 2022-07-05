import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import CartPage from './CartPage';
import {
  Routes,
  Route,
} from "react-router-dom";

function MainPage() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main>
      <Header count={cartItems.length} />
      <Home addItems={setCartItems} value={cartItems} />
      
      <Routes>
        <Route path='/shoping/cart'
          element={<CartPage setCartValue={setCartItems}
            cartValue={cartItems}
          />} />
      </Routes>
    </main>
  );
}

export default MainPage;