"use client";

import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

export const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <section className="h-[790px] bg-neutral-500" id="home">
      <div className="relative -space-x-48 lg:-space-x-24 h-full flex items-center">
        <div className="flex-1 z-10 pl-6 lg:pl-12 xl:pl-24 text-white">
          <h1
            className="h1 mb-8 text-inherit"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Get the best part of your day
            <br />
            <span className="text-primary-200">– you fit here.</span>
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="600"
            className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
          >
            We provide serious fitness but within a fun and friendly, safe
            space.
          </p>
          <button
            type="button"
            data-aos="fade-down"
            data-aos-delay="700"
            className="btn btn-secondary btn-sm lg:btn-lg"
          >
            Join now
          </button>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="900"
          className="w-full h-full flex-1 bg-banner bg-cover bg-right lg:bg-center bg-no-repeat"
        />
      </div>
    </section>
  );
};
