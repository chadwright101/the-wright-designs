import type { Metadata } from "next";
import HeroComponent from "./_components/home/hero-component";
import AboutComponent from "./_components/home/about-component";

export const metadata: Metadata = {
  title: "The Wright Designs - Quality web design",
};

export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
    </>
  );
}
