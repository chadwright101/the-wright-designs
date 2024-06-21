"use client";

import { useEffect, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import Button from "@/app/_components/button";
import { sendEmail } from "@/app/_actions/actions";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      setValidateRecaptcha(!!value);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [formSubmitted]);

  return (
    <section className={`bg-blue ${cssClasses}`}>
      {!formSubmitted ? (
        <p className="text-beige mb-6">
          Get in touch and let&apos;s discuss how we can enhance your online
          presence.
        </p>
      ) : (
        <>
          <div id="email-submitted"></div>
          <p className="text-beige mb-6 text-[18px]">
            Thanks for your message! We will get back to you ASAP...
          </p>
        </>
      )}

      {!formSubmitted && (
        <form
          action={async (formData) => {
            await sendEmail(formData);
            setFormSubmitted(true);
          }}
          className="flex flex-col gap-8"
        >
          <input type="hidden" name="_honey" className="hidden" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-paragraph font-bold text-beige"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="emailAddress"
                required
                autoComplete="email"
                placeholder="Type your email address here..."
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-paragraph font-bold text-beige"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="fullName"
                autoComplete="name"
                required
                minLength={3}
                placeholder="Type your full name here..."
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
              />
            </div>
          </div>
          {!showMessage && (
            <Button
              onClick={() => {
                setShowMessage(true);
              }}
              cssClasses="justify-center tablet:w-[135px] tablet:justify-between"
              form
              buttonColor="pink"
            >
              Next
            </Button>
          )}
          {showMessage && (
            <>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-paragraph font-bold text-beige"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  name="message"
                  placeholder="Type your message
                  here..."
                  className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>

              <Button
                url=""
                cssClasses={classNames(
                  "justify-center tablet:w-[150px] tablet:justify-between",
                  {
                    "opacity-50 desktopSmall:cursor-not-allowed":
                      !validateRecaptcha,
                    "hover:desktopSmall:opacity-90": validateRecaptcha,
                  }
                )}
                disabled={!validateRecaptcha}
                form
                buttonColor="pink"
              >
                Submit
              </Button>
              <Recaptcha onChange={handleRecaptchaChange} />
            </>
          )}
        </form>
      )}
    </section>
  );
};

export default ContactForm;

interface RecaptchaProps {
  onChange: (value: string | null) => void;
}

const Recaptcha = ({ onChange }: RecaptchaProps) => {
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      onChange={onChange}
      className="recaptcha"
    />
  );
};
