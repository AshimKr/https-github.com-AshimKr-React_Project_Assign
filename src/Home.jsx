import React from 'react';
import { useNavigate } from "react-router-dom";

const Home=()=>{
  const navigate = useNavigate();
  return(
    <div className="container-md text-center mt-5">
  <div className="row">
    <div className="col"
      onClick={()=>{navigate('/bmi')}}
      >
      <i className="fa-solid fa-calculator fa-2xl"></i>
      <h3>BMI Calculator</h3>
    </div>
    <div className="col"
      onClick={()=>{navigate('/shoping')}}
      >
      <i className="fa-solid fa-cart-shopping fa-2xl"></i>
      <h3>Shopping Cart</h3>
    </div>
    <div className="col"
      onClick={()=>{navigate('/gallery')}}
      >
      <i className="fa-solid fa-images fa-2xl"></i>
      <h3>Image Gallary</h3>
    </div>
  </div>
</div>
  );
}

export default Home;