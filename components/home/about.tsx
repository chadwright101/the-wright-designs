interface Props {
  cssClasses?: string;
}

const About = ({ cssClasses }: Props) => {
  return (
    <article className={`${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">About</h2>
      <div className="text-justify flex flex-col gap-4 max-w-[550px] mx-auto tablet:max-w-none tablet:mx-0">
        <p>
          The Wright Designs is comprised of a small team operating from
          Plettenberg Bay, South Africa. Our aim is to assist other small to
          medium businesses in growing their online presence, which starts with
          a strong website.
        </p>
        <p>
          We specialise in providing quality & modern tailor-made solutions
          through eye-catching designs, which are then implemented through clean
          and functional development. If you&apos;re feeling the need to break
          free of a theme or template that&apos;s too restrictive, outdated or
          hard to manage, we can build you a custom-made website that is unique
          to your business.
        </p>
        <p>
          We&apos;re all about fundamentals, which is why our measured &
          communication-based approach allows you, our client, to be as hands-on
          as you&apos;d like. Whether you&apos;ve got a lot on your plate and
          need a experienced team to take the wheel, or would like to be
          involved in every step of the way, we can facilitate your needs. Our
          team is flexible and willing to adapt to whatever is needed to get the
          job done correctly by deadline day, without cutting corners.
        </p>
        <p>
          Our guarantee is and has always been a hassle-free design &
          development process, followed by a professional & efficient
          after-sales service.
        </p>
      </div>
    </article>
  );
};

export default About;
