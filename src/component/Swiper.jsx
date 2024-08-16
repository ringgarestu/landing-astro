import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const ImageSlider = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src="path-to-image-1.jpg" alt="Image 1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="path-to-image-2.jpg" alt="Image 2" />
    </SwiperSlide>
  </Swiper>
);
