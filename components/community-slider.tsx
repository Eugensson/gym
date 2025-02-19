"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface CommunitySliderProps {
  items: Array<{
    id: string;
    image: string;
    name: string;
    message: string;
  }>;
}

export const CommunitySlider = ({ items }: CommunitySliderProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      modules={[Autoplay]}
    >
      {items.map(({ id, image, name, message }) => (
        <SwiperSlide key={id}>
          <article className="relative">
            <Image
              src={image}
              width={360}
              height={480}
              alt={`${name} client image`}
              className="object-cover"
            />
            <div className="absolute bottom-8 p-5 text-white text-center">
              <p className="mb-8 italic text-lg font-light">{message}</p>
              <div className="flex items-center justify-center gap-x-1">
                <span className="text-3xl font-bold text-primary-200">~</span>
                <p className="text-xl font-bold">{name}</p>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
