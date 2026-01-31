import React, { type JSX } from "react";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";
//@ts.ignore: ignore next line
import "swiper/css/effect-fade";
//@ts.ignore: ignore next line
import "swiper/css/navigation";
//@ts.ignore: ignore next line
import "swiper/css/pagination";
import { ArrowRight } from "../../icons/ArrowRight";
import { ArrowLeft } from "../../icons/ArrowLeft";

type Slide = {
  id: number;
  src: string;
  alt: string;
};

type SliderProps = SwiperProps & {
  slides: Slide[];
};

const ImageSlider: React.FC<SliderProps> = ({
  slides,
  ...prpos
}): JSX.Element => {
  return (
    <div className="relative">
      <button className="absolute z-20 top-1/2 left-0 transform -translate-y-1/2 bg-primary-500 p-2 shadow-md swiper-button-prev-custom">
        <ArrowLeft />
      </button>
      <button className="absolute z-20 top-1/2 right-0 transform -translate-y-1/2 bg-primary-500 p-2 shadow-md swiper-button-next-custom">
        <ArrowRight />
      </button>
      <Swiper
        {...prpos}
        modules={[EffectFade, Navigation, Pagination]}
        pagination={{ clickable: true }}
        effect="fade"
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <img src={slide.src} alt={slide.alt} width="80%" height={300} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;





