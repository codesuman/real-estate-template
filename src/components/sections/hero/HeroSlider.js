import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import required modules
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

const HeroSlider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        effect="fade"
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src="/images/Offer-LP-05.jpg" alt="Offer Slide 1" className="d-block w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/LP-03.jpg" alt="Offer Slide 2" className="d-block w-100" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
