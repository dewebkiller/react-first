import React from 'react';
import ReactDOM from 'react-dom';
//import Condition from './Condition';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

ReactDOM.render (
  <BrowserRouter>
 < Router />
 </BrowserRouter>
  ,document.getElementById('root')
);