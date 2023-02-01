import { useState } from "react";
import Button from "./button";

interface Props {
  cssClasses?: string;
  formTitle?: string;
}

const ContactForm = ({
  cssClasses,
  formTitle = "Please fill out the form below and we will get back to you ASAP...",
}: Props) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className={`bg-blue -mx-[30px] px-[30px] tablet:-mx-[50px] tablet:px-[50px] desktop:-mx[100px] desktop:px-[50px] py-14 ${cssClasses}`}
    >
      <p className="text-beige mb-6">{formTitle}</p>
      <form
        action="https://formsubmit.co/info@thewrightdesigns.co.za"
        method="POST"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-paragraph lowercase text-beige"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="email address"
              className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
            />
          </div>
          {!showMessage && !showName ? (
            <Button
              onClick={() => setShowName(true)}
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
                placeholder="full name"
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
              />
            </div>
          )}
        </div>
        {!showMessage && showName && (
          <Button
            onClick={() => setShowMessage(true)}
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
              ></textarea>
            </div>
            <Button
              url=""
              cssClasses="justify-center tablet:w-[150px] tablet:justify-between"
              form
              pinkBackground
              beigeText
              beigeArrows
            >
              Submit
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
