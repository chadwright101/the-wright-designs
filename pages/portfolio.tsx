import PortfolioComponent from "@/components/portfolio/portfolio-component";

const Portfolio = () => {
  return (
    <main>
      <h1 className="text-heading text-center mt-10 mb-16">Portfolio</h1>
      <PortfolioComponent cssClasses="mb-8 tablet:mb-14" />
    </main>
  );
};

export default Portfolio;
