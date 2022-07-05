import React from 'react';
import './App.css';
import HomePage from './BMICalculator/HomePage'
import MainPage from './Cart/MainPage.jsx';
import HomeGallery from './Gallery/HomeGallery';
import Home from './Home';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
     <Routes>
        <Route exact path='/shoping' element={<MainPage />} />
       <Route path='/bmi' element={<HomePage />} />
       <Route path='/gallery' element={<HomeGallery />} />
        <Route path='/' element={<Home />} />
      </Routes>


  );
}

export default App;

