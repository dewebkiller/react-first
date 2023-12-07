import React from "react";
import Home from './Components/Home'; 
import About from './Components/About';
import Counter from './Components/Counter';
import Header from "./Components/Header";
import Bootstrap from "./Components/Bootstrap";
import Calculator from "./Components/Calculator";
import Slider from "./Components/Slider";
import Jquery from "./Components/Jquery";
import Error from "./Components/Errorpage";
import {Routes, Route } from 'react-router-dom';

function Router(){
  return(
    <>
    <Routes>
      <Route path="/" element={<><Header/><Home /></>} />
      <Route path="/about" element={<><Header /><About /></>} />
      <Route path="/counter" element={<><Header /><Counter /> </>} />
      <Route path="/bootstrap" element={<><Header />< Bootstrap/></>} />
      <Route path="/calculator" element={<><Header />< Calculator/></>} />
      <Route path="/slider" element={<><Header />< Slider/></>} />
      <Route path="/Jquery" element={<><Header />< Jquery/></>} />
      <Route path="*" element={<><Header /><Error /></>} />
    </Routes>
    </>
  )
}
export default Router;