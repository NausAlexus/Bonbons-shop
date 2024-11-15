import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider2.css";
import PRODUCT from "../../../data/PRODUCT";
import { useState } from "react";

const Slider2 = ({hendlItemValue}) => {

  const sliderArr = Object.values(PRODUCT.assortiments).flat();

  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="slider2"
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 слайд от 0 до 768
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 2, // 1 слайд от 0 до 768
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // 2 слайда от 768 до 1024
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4, // 3 слайда от 1024 до 1400
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5, // 3 слайда от 1024 до 1400
            spaceBetween: 30,
          },
        }}
      >
        {sliderArr.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider2-item-wrapper">
              <img className="slider2-item" onClick={() => hendlItemValue(slide)} src={slide.src} alt={slide.title} />
            </div>
            <p className="slider2-link" onClick={() => hendlItemValue(slide)}>{slide.title}</p>
            <p className="slider2-price">{(slide.price).toFixed(2)} $</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider2;