import Image from "next/image";

import { WorkoutsSlider } from "@/components/workouts-slider";

import { programList } from "@/constants";

export const Workouts = () => {
  return (
    <section className="section" id="workouts">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="section-title-group max-w-[550px] mx-auto px-4 lg:px-0"
      >
        <Image
          src="/icons/calendar.svg"
          width={150}
          height={106}
          alt="Calendar Icon"
        />
        <h2 className="h2 section-title">
          Training programs
          <span className="text-primary-200 animate-pulse">.</span>
        </h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <WorkoutsSlider programList={programList} />
      </div>
    </section>
  );
};
