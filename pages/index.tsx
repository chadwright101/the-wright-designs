import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import WhyUs from "@/components/home/why-us";
import HeroComponent from "../components/home/hero-component";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <div id="whyus" className=" -translate-y-[5.5rem]"></div>
      <WhyUs cssClasses="mb-20 mt-14 tablet:mb-16 tablet:mt-10 desktop:my-16" />
      <div id="about" className=" -translate-y-32"></div>
      <About />
      <div id="contact" className=" -translate-y-16"></div>
      <Contact cssClasses="mt-20 tablet:mt-16 tablet:mb-10" />
    </>
  );
}
