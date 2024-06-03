import type { Metadata } from "next";

import ContactForm from "@/app/_components/contact-form";
import PortfolioComponent from "@/app/_components/portfolio/portfolio-component";

export const metadata: Metadata = {
  title: "Portfolio - The Wright Designs",
};

const Portfolio = () => {
  return (
    <main>
      <h1 className="text-heading text-center mt-10 mb-16">Portfolio</h1>
      <PortfolioComponent cssClasses="mb-14" />
      <ContactForm
        cssClasses="tablet:mb-10"
        formTitle="Contact us now to get an obligation free quote!"
      />
    </main>
  );
};

export default Portfolio;
