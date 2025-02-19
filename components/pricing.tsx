import Image from "next/image";

import { PricingList } from "@/components/pricing-list";

import { pricingData } from "@/constants";

export const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="section-title-group max-w-[550px] mx-auto px-4 lg:px-0"
      >
        <Image
          src="/icons/price.svg"
          width={150}
          height={106}
          alt="Price Badge Icon"
        />
        <h2 className="h2 section-title">
          Pricing plan<span className="text-primary-200 animate-pulse">.</span>
        </h2>
      </div>
      <PricingList pricingData={pricingData} />
    </section>
  );
};
