import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider1.css";
import SLIDER1 from "../../../data/SLIDER1";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Slider1 = () => {

    // Создаем объект состояния для отслеживания загрузки каждой картинки
    const [loadingStates, setLoadingStates] = useState(
      SLIDER1.reduce((acc, slide) => ({ ...acc, [slide.id]: true }), {})
    );
  
    const handleImageLoad = (id) => {
      setLoadingStates((prevStates) => ({
        ...prevStates,
        [id]: false, // Устанавливаем состояние загрузки для конкретной картинки
      }));
    };
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
            slidesPerView: 2, // 2 слайд от 0 до 768
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // 3 слайда от 768 до 1024
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4, // 4 слайда от 1024 до 1400
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5, // 5 слайда от 1024 до 1400
            spaceBetween: 30,
          },
        }}
      >
        {SLIDER1.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider1-item-wrapper">
              {/* Отображаем лоадер, пока изображение не загрузится */}
              {loadingStates[slide.id] && (
                <div className="image-loader">
                  <div className="gooey">
                    <span className="dot"></span>
                    <div className="dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            <Link to={slide.link}><img className="slider1-item" src={slide.image} alt={slide.title} onLoad={() => handleImageLoad(slide.id)} /></Link>
            </div>
            <Link to={slide.link} className="slider1-link">{slide.title}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider1;