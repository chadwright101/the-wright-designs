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
          content="https://www.thewrightdesigns.co.za/_next/image?url=%2Fimg%2Fscreenshots%2Fall-mobile-phones.png&w=1080&q=75"
        />
        <meta property="og:title" content="Portfolio - The Wright Designs" />
        <meta
          property="og:url"
          content="https://www.thewrightdesigns.co.za/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Tailor-made website development, SEO experts with quick turnaround times"
        />
        <meta property="og:site_name" content="The Wright Designs" />
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
