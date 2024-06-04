"use client";

import Link from "next/link";
import { useState } from "react";

import ContactForm from "./contact-form";
import { showEmailAddress, showPhoneNumber } from "@/app/_actions/actions";

import data from "@/app/_data/general-data.json";
import ContactMap from "./contact-map";

interface Props {
  cssClasses?: string;
}

const {
  contact: { phone, email, address },
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
      <div className="grid desktop:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[100px_1fr]">
            <h3 className="text-subheading">Email:</h3>
            {showEmail === "Show email address" ? (
              <button
                onClick={handleShowEmailAddress}
                className="text-paragraph self-center py-3 px-2 -my-3 -mx-2 hover:tablet:text-pink hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start"
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
                className="text-paragraph self-center font-extralight tablet:hover:text-pink place-self-start text-linkBlue"
              >
                {showEmail}
              </Link>
            )}
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <h3 className="text-subheading">Phone:</h3>
            {showPhone === "Show phone number" ? (
              <button
                onClick={handleShowPhoneNumber}
                className="text-paragraph self-center py-3 px-2 -my-3 -mx-2 hover:tablet:text-pink hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start"
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
                className="text-paragraph self-center font-extralight tablet:hover:text-pink place-self-start text-linkBlue"
              >
                {phone}
              </Link>
            )}
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <h3 className="text-subheading">Address:</h3>
            <address className="text-paragraph self-center font-extralight">
              {address}
            </address>
          </div>
        </div>
        <ContactMap cssClasses="h-[300px] desktop:h-full row-span-2" />
        <ContactForm cssClasses="desktop:mt-0" />
      </div>
    </section>
  );
};

export default Contact;
