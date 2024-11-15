import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider1.css";
import SLIDER1 from "../../../data/SLIDER1";
import { Link } from 'react-router-dom';

const Slider1 = () => {
  return (
    <>
      <h3 className="slider1-title">Our signature delights</h3>
      <p className="slider1-text">Delicious masterpieces that make us unique</p>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="slider1"
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
        {SLIDER1.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider1-item-wrapper">
            <Link to={slide.link}><img className="slider1-item" src={slide.image} alt={slide.title} /></Link>
            </div>
            <Link to={slide.link} className="slider1-link">{slide.title}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider1;