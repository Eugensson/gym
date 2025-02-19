import Image from "next/image";

export const Join = () => {
  return (
    <section className="min-h-[537px] pb-20 bg-neutral-500" id="contact">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
            className="-mt-20 max-w-[276px] md:max-w-[442px] lg:max-w-full"
          >
            <Image
              src="/images/join/woman.png"
              width={500}
              height={618}
              alt="Woman in gym"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
            className="max-w-[350px] lg:max-w-[492px] ml-8"
          >
            <h2 className="mb-4 lg:mb-6 h1 md:text-[60px] md:leading-[62px] text-white">
              Wanna join{" "}
              <span className="text-primary-200 animate-pulse">&</span> have
              fun?
            </h2>
            <p className="mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px] text-body-sm md:text-body-md text-white">
              We’ll keep you updated on the things you need to know about Gymme.
              Nothing more, nothing less.
            </p>
            <button type="button" className="btn btn-secondary btn-lg">
              Join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
