import type { Metadata } from "next";

import About from "@/app/_components/home/about";
import Contact from "@/app/_components/home/contact/contact";
import Services from "@/app/_components/home/services";
import WhyUs from "@/app/_components/home/why-us";
import HeroComponent from "./_components/home/hero-component";
import OurClients from "@/app/_components/home/our-clients";

export const metadata: Metadata = {
  title: "The Wright Designs - Quality web design",
};

export default function Home() {
  return (
    <>
      <HeroComponent />
      <WhyUs cssClasses="mb-20 mt-16 tablet:mt-0 tablet:mb-16 tablet2:my-16" />
      <div id="services" className="-translate-y-32"></div>
      <Services />
      <div id="about" className=" -translate-y-16"></div>
      <About cssClasses="my-20 tablet:my-16" />
      <OurClients />
      <div id="contact" className=" -translate-y-16"></div>
      <Contact cssClasses="mt-20 tablet:mt-16 tablet:mb-10" />
    </>
  );
}
