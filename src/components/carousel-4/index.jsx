import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './sass/style.scss';

// import required modules
import { Pagination } from 'swiper/modules';
// import CarImage from './img/bmw.png'
import MercedesImage from '../carousel/img/mercedes.png'
import BmwImage from '../carousel/img/bmw.png'
import LexusImage from '../carousel-3/img/lexus.png'
import RollsRoyce from './img/rr.png'

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={RollsRoyce} alt="" /></SwiperSlide>
        <SwiperSlide><img src={LexusImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={MercedesImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={BmwImage} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
