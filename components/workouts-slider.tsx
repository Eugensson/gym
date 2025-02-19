"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface WorkoutsSliderProps {
  programList: Array<{ image: string; name: string }>;
}

export const WorkoutsSlider = ({ programList }: WorkoutsSliderProps) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programList.map(({ image, name }) => (
        <SwiperSlide
          key={name}
          className="relative max-w-[320px] max-h-[320px] aspect-square overflow-hidden"
        >
          <Image
            src={image}
            alt={name}
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute left-5 bottom-5 bg-white h-7 px-4 flex items-center rounded-[1px]">
            <h3 className="font-primary font-semibold text-sm text-neutral-500">
              {name}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
