import Link from "next/link";
import { useState } from "react";

import ContactForm from "../contact-form";
import SwipeLeftToRight from "../swipe-left-right";
import SwipeRightToLeft from "../swipe-right-left";

interface Props {
  cssClasses?: string;
}

const Contact = ({ cssClasses }: Props) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section className={` drop-shadow-md ${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">Contact</h2>
      <SwipeLeftToRight>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <h3 className="text-subheading">Email:</h3>
            {!showEmail ? (
              <p
                onClick={() => setShowEmail(!showEmail)}
                className="text-[1.3rem] tablet:hover:text-pink py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic"
              >
                Show email
              </p>
            ) : (
              <Link
                href="mailto:info@thewrightdesigns.co.za"
                className="text-[1.25rem] font-extralight tablet:hover:text-pink"
              >
                info@thewrightdesigns.co.za
              </Link>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <h3 className="text-subheading">Phone:</h3>
            {!showPhone ? (
              <p
                onClick={() => setShowPhone(!showPhone)}
                className="text-[1.3rem] tablet:hover:text-pink py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic"
              >
                Show phone number
              </p>
            ) : (
              <Link
                href="tel:+27833905238"
                className="text-[1.25rem] font-extralight tablet:hover:text-pink"
              >
                +27 83 390 5238
              </Link>
            )}
          </div>
        </div>
      </SwipeLeftToRight>
      <SwipeRightToLeft delay={200}>
        <ContactForm cssClasses="mt-8" />
      </SwipeRightToLeft>
    </section>
  );
};

export default Contact;
