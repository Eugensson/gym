import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqList } from "@/constants";

export const Faq = () => {
  return (
    <section id="faq" className="section pt-[480px] lg:pt-60 mb-20 lg:mb-0">
      <div className="max-w-screen-md mx-auto lg:h-[1160px] lg:pt-6 lg:bg-faq bg-no-repeat bg-custom bg-center">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0"
        >
          <Image
            src="/icons/question-mark.svg"
            width={60}
            height={100}
            alt="Users Icon"
            className="lg:hidden"
          />
          <h2 className="h2 section-title uppercase lg:mt-24">
            faq<span className="text-primary-200 animate-pulse">.</span>
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-y-4 px-4"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
        >
          {faqList.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              value={question}
              className="min-h-16 px-8 border rounded-sm"
            >
              <AccordionTrigger className="h6">{question}</AccordionTrigger>
              <AccordionContent className="px-8 flex items-center min-h-[200px] lg:min-h-40 md:text-lg">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
