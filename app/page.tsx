import { Faq } from "@/components/faq";
import { Join } from "@/components/join";
import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing";
import { Workouts } from "@/components/workouts";
import { Community } from "@/components/community";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
