
import React, { useRef, useState, Component} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

import "../../src/index.css"

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";




export default class gallery extends Component {
  render() {
    return (
      <>
       <section className="hero ptrn is-fluid is-fullheight is-vcentered">
            <div className="">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
            </div>
       </section>

      
      </>
    )
  }
}
