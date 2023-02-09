import Head from "next/head";

import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Services from "@/components/home/services";
import WhyUs from "@/components/home/why-us";
import HeroComponent from "../components/home/hero-component";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Wright Designs</title>
        <meta
          name="description"
          content="Clean, functional & Custom-made website development at an affordable price point - The Wright Designs"
        />
        <meta
          name="keywords"
          content="website development, website design, website, development, design, portfolio, developer, frontend, frontend developer"
        />
        <meta
          property="og:image"
          content="/img/screenshots/all-mobile-phones.png"
        />
        <meta property="og:title" content="The Wright Designs" />
        <meta property="og:url" content="https://www.thewrightdesigns.co.za" />
        <meta
          property="og:description"
          content="Clean, functional & Custom-made website development at an affordable price point"
        />
        <meta property="og:site_name" content="The Wright Designs" />
        <meta
          name="google-site-verification"
          content="UTqm5UapFYhMabm4zaqxVdl5K8L1yyF9ScSaoaQeo2Y"
        />
      </Head>
      <HeroComponent />
      <WhyUs cssClasses="mb-20 mt-4 tablet:mt-0 tablet:mb-16 tablet2:my-16" />
      <div id="services" className="-translate-y-32"></div>
      <Services />
      <div id="about" className=" -translate-y-16"></div>
      <About cssClasses="my-20 tablet:my-16" />
      <div id="contact" className=" -translate-y-32"></div>
      <Contact cssClasses="mt-20 tablet:mt-16 tablet:mb-10" />
    </>
  );
}
