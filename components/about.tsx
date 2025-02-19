import "aos/dist/aos.css";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const About = () => {
  return (
    <section
      className="py-20 md:py-28 lg:pt-36 lg:pb-44 px-5 lg:px-36"
      id="about"
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="section-title-group justify-start"
        >
          <Image
            src="/icons/users.svg"
            width={150}
            height={106}
            alt="Users Icon"
          />
          <h2 className="h2 section-title">
            Our misson <span className="text-primary-200 animate-pulse">.</span>
          </h2>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:text-body-md mb-12"
        >
          At the heart of our community lies a commitment to empowering
          individuals to lead healthier, more fulfilling lives. With top-tier
          equipment, expert guidance, and an energizing atmosphere, we provide
          the foundation for success in every fitness journey.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="md:text-body-md mb-8"
        >
          More than just a gym, we are a movement. A space where passion meets
          perseverance, and where every step forward is celebrated. Join us and
          unlock your full potential.
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="400"
          href="#"
          className="link inline-flex items-center gap-x-4 hover:gap-x-6 transition-all capitalize"
        >
          Join now
          <IoIosArrowDroprightCircle size={24} />
        </Link>
      </div>
    </section>
  );
};
