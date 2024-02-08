import { useState } from "react";
import { useRouter } from "next/router";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const router = useRouter();

  const resetForm = () => {
    setShowName(false);
    setShowMessage(false);
    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitting(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitting(true);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-email-code": process.env.NEXT_PUBLIC_API_EMAIL_SECRET_CODE || "",
      },
      body: JSON.stringify({ name, email, message }),
    });
    console.log(response.headers.get("api-email-code"));

    if (response.ok) {
      resetForm();
      setFormSubmitted(true);
      router.push("/#contact");
    } else {
      console.error("Error sending email");
      setFormError("Error sending email, please try again");
      setFormSubmitting(false);
    }
  };

  return (
    <section
      className={`bg-blue -mx-[30px] px-[30px] tablet:-mx-[50px] tablet:px-[50px] desktop:-mx[100px] desktop:px-[50px] py-14 ${cssClasses}`}
    >
      {!formSubmitted ? (
        <p className="text-beige mb-6">{formTitle}</p>
      ) : (
        <p className="text-beige mb-6 text-subheading">
          Thanks for your message! We will get back to you ASAP...
        </p>
      )}

      {!formSubmitted && (
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col gap-8"
        >
          <input type="hidden" name="_gotcha" className="hidden" />
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="email address"
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
              />
            </div>
            {!showMessage && !showName ? (
              <Button
                onClick={(event) => {
                  event.preventDefault();
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
                  value={name}
                  required
                  minLength={3}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="full name"
                  className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>
            )}
          </div>
          {!showMessage && showName && (
            <Button
              onClick={(event) => {
                event.preventDefault();
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
                  value={message}
                  name="message"
                  placeholder="type your message
        here..."
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>
              {!formSubmitting ? (
                <>
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
                  {formError && (
                    <p className="text-white italic text-center tablet:text-left">
                      *{formError}*
                    </p>
                  )}
                </>
              ) : (
                <div className="w-auto h-[50px] flex justify-center items-center px-5 py-0.5 rounded-[1.25rem] border drop-shadow-md bg-pink/75 tablet:hover:bg-pink border-blue tablet:w-[150px] tablet:h-12">
                  <div className="animate-spin h-7 w-7 border-l-[3px] border-b-[3px] border-white rounded-full"></div>
                </div>
              )}
            </>
          )}
        </form>
      )}
    </section>
  );
};

export default ContactForm;
