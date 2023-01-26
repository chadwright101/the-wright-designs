import About from "@/components/home/about";
import WhyUs from "@/components/home/why-us";
import HeroComponent from "../components/home/hero-component";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <WhyUs cssClasses="my-20 tablet:my-16" />
      <About />
    </>
  );
}
