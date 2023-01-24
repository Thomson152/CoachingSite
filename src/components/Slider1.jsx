/** @format */

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css'

import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from "../images/hero1.jpg";
import Image2 from "../images/hero2.jpg";

const Slider1 = () => {
  return (
    <div className="slider1">
      <Swiper
        modules={[ Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        effect = {"fade"}
        speed={800}
        slidesPerView={1}
       autoplay={{delay:2000}}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="slider1-img">
            <img src={Image1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider1-img">
            <img src={Image2} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider1;
