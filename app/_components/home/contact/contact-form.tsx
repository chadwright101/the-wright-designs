"use client";

import { useEffect, useState } from "react";

import Button from "@/app/_components/button";
import { sendEmail } from "@/app/_actions/actions";
import classNames from "classnames";
import Recaptcha from "@/app/_lib/Recaptcha";

interface Props {
  cssClasses?: string;
  formTitle?: string;
}

const ContactForm = ({
  cssClasses,
  formTitle = "Get in touch and let's discuss how we can enhance your online presence.",
}: Props) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (formSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [formSubmitted]);

  return (
    <section
      className={`bg-blue -mx-[30px] px-[30px] tablet:-mx-[50px] tablet:px-[50px] desktop:mx-0 desktop:px-10 py-10 ${cssClasses}`}
    >
      {!formSubmitted ? (
        <p className="text-beige mb-6">{formTitle}</p>
      ) : (
        <>
          <div id="email-submitted"></div>
          <p className="text-beige mb-6 text-subheading">
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-paragraph lowercase text-beige"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="email address"
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
              />
            </div>
            {!showMessage && !showName ? (
              <Button
                onClick={() => {
                  setShowName(true);
                }}
                cssClasses="justify-center tablet:w-[135px] tablet:justify-between"
                form
                pinkBackground
                beigeText
                beigeArrows
              >
                Next
              </Button>
            ) : (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-paragraph lowercase text-beige"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={3}
                  placeholder="full name"
                  className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>
            )}
          </div>
          {!showMessage && showName && (
            <Button
              onClick={() => {
                setShowMessage(true);
              }}
              cssClasses="justify-center tablet:w-[135px] tablet:justify-between"
              form
              pinkBackground
              beigeText
              beigeArrows
            >
              Next
            </Button>
          )}
          {showMessage && (
            <>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-paragraph lowercase text-beige"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  name="message"
                  placeholder="type your message
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
                pinkBackground
                beigeText
                beigeArrows
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
