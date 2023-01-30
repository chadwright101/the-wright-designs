import ContactForm from "@/components/contact-form";
import PortfolioComponent from "@/components/portfolio/portfolio-component";

const Portfolio = () => {
  return (
    <main>
      <h1 className="text-heading text-center mt-10 mb-16">Portfolio</h1>
      <PortfolioComponent cssClasses="mb-14" />
      <ContactForm
        cssClasses="tablet:mb-10"
        formTitle="contact us now to get an obligation free quote!"
      />
    </main>
  );
};

export default Portfolio;
