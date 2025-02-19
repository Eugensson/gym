"use client";

import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import { cn } from "@/lib/utils";

interface PricingListProps {
  pricingData: Array<{
    name: string;
    price: number;
    list: Array<{ name: string }>;
    delay: number;
  }>;
}

export const PricingList = ({ pricingData }: PricingListProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <ul className="flex flex-col lg:flex-row items-center justify-center gap-y-4 max-w-screen-xl mx-auto">
      {pricingData.map(({ name, price, list, delay }, index) => (
        <li
          key={index}
          className="w-full max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
          onClick={() => setActiveIndex(index)}
        >
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
            className={cn(
              "flex items-center justify-center py-10 px-8 lg:min-h-[550px] transition-colors duration-100",
              index === activeIndex
                ? "bg-neutral-500 text-white"
                : "bg-neutral-400/10 text-neutral-500"
            )}
          >
            <div className="flex lg:flex-col items-center gap-8 lg:gap-x-0">
              <div>
                <h3
                  className={cn(
                    "h-7 mb-8 min-w-min mx-auto px-4 flex items-center justify-center font-primary text-sm font-semibold",
                    index === activeIndex
                      ? "bg-white text-neutral-500"
                      : "bg-neutral-500 text-white"
                  )}
                >
                  {name}
                </h3>
                <div className="flex flex-col items-center justify-center text-5xl lg:text-6xl font-primary font-extrabold text-center">
                  <div className="leading-none">
                    <span className="tracking-[0.1px]">{price}</span>
                    <span className="text-3xl font-extrabold">$</span>
                  </div>
                  <span className="text-sm font-medium">/month</span>
                </div>
              </div>
              <div>
                <ul className="flex flex-col gap-y-4 mb-8">
                  {list.map(({ name }) => (
                    <li key={name} className="flex items-center gap-x-2.5">
                      <BsCheckCircleFill size={18} />
                      {name}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={cn(
                    "btn btn-lg rounded-[1px] lg:mx-auto capitalize transition-colors",
                    index === activeIndex
                      ? "bg-white text-neutral-500"
                      : "border border-neutral-500"
                  )}
                >
                  Join now
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
