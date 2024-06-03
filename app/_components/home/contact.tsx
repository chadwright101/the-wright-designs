"use client";

import Link from "next/link";
import { useState } from "react";

import ContactForm from "../contact-form";
import { showEmailAddress, showPhoneNumber } from "@/app/_actions/actions";

import data from "@/app/_data/general-data.json";

interface Props {
  cssClasses?: string;
}

const {
  contact: { phone, email },
} = data;

const Contact = ({ cssClasses }: Props) => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
    setShowSpinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);
    const emailAddress = await showEmailAddress();
    setShowEmail(emailAddress);
    setShowSpinnerEmail(false);
  };

  return (
    <section className={`drop-shadow-md ${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">Contact</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[78px_1fr] items-center">
          <h3 className="text-subheading">Email:</h3>
          {showEmail === "Show email address" ? (
            <button
              onClick={handleShowEmailAddress}
              className="text-[1.3rem] tablet:hover:underline underline-offset-8 decoration-[1.5px] py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start"
              aria-label="Show email address"
            >
              {showSpinnerEmail ? (
                <div className="small-spinner"></div>
              ) : (
                showEmail
              )}
            </button>
          ) : (
            <Link
              href={`mailto:${email}`}
              className="text-[1.3rem] font-extralight tablet:hover:text-pink place-self-start text-linkBlue"
            >
              {showEmail}
            </Link>
          )}
        </div>
        <div className="grid grid-cols-[78px_1fr] items-center">
          <h3 className="text-subheading">Phone:</h3>
          {showPhone === "Show phone number" ? (
            <button
              onClick={handleShowPhoneNumber}
              className="text-[1.3rem] tablet:hover:underline underline-offset-8 decoration-[1.5px] py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start"
              aria-label="Show phone number"
            >
              {showSpinnerPhone ? (
                <div className="small-spinner"></div>
              ) : (
                showPhone
              )}
            </button>
          ) : (
            <Link
              href={`tel:${phone}`}
              className="text-[1.3rem] font-extralight tablet:hover:text-pink place-self-start text-linkBlue"
            >
              {phone}
            </Link>
          )}
        </div>
      </div>
      <ContactForm cssClasses="mt-8" />
    </section>
  );
};

export default Contact;
