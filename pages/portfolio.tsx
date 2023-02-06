import Head from "next/head";

import ContactForm from "@/components/contact-form";
import PortfolioComponent from "@/components/portfolio/portfolio-component";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - The Wright Designs</title>
        <meta
          name="description"
          content="Quality tailor-made development, quick turnaround time, SEO experts - The Wright Designs"
        />
        <meta
          name="keywords"
          content="website development, website design, website, development, design, portfolio, developer, frontend, frontend developer"
        />
        <meta
          property="og:image"
          content="/img/screenshots/hero-slide-1-devices.png"
        />
      </Head>
      <main>
        <h1 className="text-heading text-center mt-10 mb-16">Portfolio</h1>
        <PortfolioComponent cssClasses="mb-14" />
        <ContactForm
          cssClasses="tablet:mb-10"
          formTitle="contact us now to get an obligation free quote!"
        />
      </main>
    </>
  );
};

export default Portfolio;
