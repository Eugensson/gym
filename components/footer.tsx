import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="bg-neutral-500 border-t border-neutral-300 py-6 md:py-12">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="container md:px-5 space-y-8"
      >
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-12">
          <Logo />
          <Socials />
        </div>
        <p className="text-xs text-center text-neutral-300">
          &copy; Gymme,2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
