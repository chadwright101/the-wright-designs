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
      <h1>Hello</h1>
    </>
  );
}
