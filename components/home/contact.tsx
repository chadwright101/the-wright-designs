import Link from "next/link";
import { useState } from "react";

import ContactForm from "../contact-form";

interface Props {
  cssClasses?: string;
}

const Contact = ({ cssClasses }: Props) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section className={` drop-shadow-md ${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">Contact</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[78px_1fr] items-center">
          <h3 className="text-subheading">Email:</h3>
          {!showEmail ? (
            <p
              onClick={() => setShowEmail(!showEmail)}
              className="text-[1.3rem] tablet:hover:underline underline-offset-8 py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue"
            >
              Show email
            </p>
          ) : (
            <Link
              href="mailto:chad@thewrightdesigns.co.za"
              className="text-[1.15rem] font-extralight tablet:hover:text-pink"
            >
              chad@thewrightdesigns.co.za
            </Link>
          )}
        </div>
        <div className="grid grid-cols-[78px_1fr] items-center">
          <h3 className="text-subheading">Phone:</h3>
          {!showPhone ? (
            <p
              onClick={() => setShowPhone(!showPhone)}
              className="text-[1.3rem] tablet:hover:underline underline-offset-8 py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue"
            >
              Show phone number
            </p>
          ) : (
            <Link
              href="tel:+27833905238"
              className="text-[1.15rem] font-extralight tablet:hover:text-pink"
            >
              +27 83 390 5238
            </Link>
          )}
        </div>
      </div>
      <ContactForm cssClasses="mt-8" />
    </section>
  );
};

export default Contact;
