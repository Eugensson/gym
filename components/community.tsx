import Image from "next/image";

import { CommunitySlider } from "@/components/community-slider";

import { testimonialList } from "@/constants";

export const Community = () => {
  return (
    <section className="relative section" id="community">
      <div className="container">
        <div className="flex">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            className="section-title-group max-w-[240px] mx-auto px-4 lg:px-0 lg:ml-0"
          >
            <Image
              src="/icons/community.svg"
              width={150}
              height={106}
              alt="Message Icon"
            />
            <h2 className="h2 section-title">
              Community
              <span className="text-primary-200 animate-pulse">.</span>
            </h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
            className="absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0 "
          >
            <CommunitySlider items={testimonialList} />
          </div>
        </div>
      </div>
    </section>
  );
};
