interface Props {
  cssClasses?: string;
}

const About = ({ cssClasses }: Props) => {
  return (
    <section className={`${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">About</h2>
      <div className="text-center flex flex-col gap-4 max-w-[550px] mx-auto tablet:max-w-none tablet:mx-0">
        <p>
          The Wright Designs is comprised of a small team opporating from
          Plettenberg Bay, South Africa. Our aim is to assist other small to
          medium businesses grow their online precence, which starts with a
          strong website.
        </p>
        <p>
          We specialise in providing quality & modern tailor-made solutions
          through eye-catching designs, which are then implemented through clean
          and functional development. If you're feeling the need to break free
          of a theme or template that's a bit too restrictive, outdated or hard
          to manage, we just might have the answer for you.
        </p>
        <p>
          We're all about fundamentals, which is why our communication based
          approach allows for you, our client, to be as hands on, or hands off
          as you'd like. If you're looking to be included in each step of the
          process to ensure the final product is exactly what you want, we're
          game. Or perhaps you've got a lot on your plate and need a trusted and
          experienced one stop shop to getting online, that&apos;s no problem
          either. Our team is flexible and willing to adapt to whatever is
          needed to get the job done correctly by deadline day.
        </p>
        <p>
          Our guarantee is and has always been a hassle-free design &
          development process, followed by a professional & efficient
          after-sales service.
        </p>
      </div>
    </section>
  );
};

export default About;
