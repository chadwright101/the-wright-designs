import type { Metadata } from "next";
import HeroComponent from "./_components/home/hero-component";
import AboutComponent from "./_components/home/about-component";
import OurClientsComponent from "./_components/home/our-clients-component";
import ServicesComponent from "./_components/home/services-component";

export const metadata: Metadata = {
  title: "The Wright Designs - Quality web design",
};

export default function Home() {
  return (
    <>
      <HeroComponent />
      <OurClientsComponent cssClasses="desktopSmall:hidden" />
      <AboutComponent />
      <ServicesComponent />
    </>
  );
}
