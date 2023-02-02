interface Props {
  cssClasses?: string;
}

const About = ({ cssClasses }: Props) => {
  return (
    <section className={`${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">About</h2>
      <div className="text-center flex flex-col gap-4 max-w-[550px] mx-auto tablet:max-w-none tablet:mx-0">
        <p>
          The Wright Designs is a small, community orientated business, aimed at
          helping other small to medium businesses grow. We specialise in
          providing modern web design, stylish e-brochure, logo and business
          card designs, as well as professional photography.
        </p>
        <p>
          Our services are tailor-made. This allows our clients to be a part of
          the design process as much as they would like to and makes it possible
          for us to quote according to our clients&apos; particular needs-
          allowing them a personalised package that suits their pocket.
        </p>
        <p>
          We pride ourselves on our hands-on approach and personal touch. We
          guarantee a hassle-free process and professional after-sales service.
        </p>
      </div>
    </section>
  );
};

export default About;
