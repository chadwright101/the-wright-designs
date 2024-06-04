import type { Metadata } from "next";

import ContactForm from "@/app/_components/home/contact/contact-form";
import PortfolioComponent from "@/app/_components/portfolio/portfolio-component";
import Button from "../_components/button";

export const metadata: Metadata = {
  title: "Recent Projects - The Wright Designs",
};

const Portfolio = () => {
  return (
    <main>
      <h1 className="text-heading text-center mt-10 mb-16">Recent Projects</h1>
      <PortfolioComponent cssClasses="mb-10" />
      <Button
        url="https://www.chadwright.dev/projects"
        target="_blank"
        pinkBackground
        cssClasses="mx-auto mb-14"
      >
        View project archive
      </Button>
      <ContactForm cssClasses="tablet:mb-10" />
    </main>
  );
};

export default Portfolio;
