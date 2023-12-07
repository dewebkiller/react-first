//import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../Swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Slider() {
return (
  <>
  <div className="container text-center">
  <h1>The slider page</h1>
  <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://www.dewebkiller.com/standardhtmlimages/banner1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://www.dewebkiller.com/standardhtmlimages/banner2.jpg" /></SwiperSlide>
      </Swiper>
      </div>
  </>
)
}
export default Slider;