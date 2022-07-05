import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = ({count}) => {
  const navigate = useNavigate();
  return (
    <main>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid d-flex ">
          <span className="navbar-brand mb-0  h1 mx-auto">Shopping Cart</span>
        <span 
          onClick={()=>{navigate('/shoping/cart')}}
          className="navbar-brand mb-0 h1 me-2"><i className="fa-solid fa-cart-shopping"></i> {count} </span>
        
        </div>
      </nav>
    </main>
  );
}

export default Header;
