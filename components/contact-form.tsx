import Button from "./button";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  return (
    <div
      className={`bg-blue -mx-[30px] px-[30px] tablet:-mx-[50px] tablet:px-[50px] desktop:-mx[100px] desktop:px-[50px] py-14 ${cssClasses}`}
    >
      <p className="text-beige mb-6">
        Please fill out the form below and we'll get back to you ASAP...
      </p>
      <form
        action="https://formsubmit.co/info@thewrightdesigns.co.za"
        method="POST"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-8 tablet:grid  tablet:grid-cols-2">
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
        </div>
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
            rows={10}
            name="message"
            placeholder="type your message
        here..."
            className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
          ></textarea>
        </div>
        <Button
          url=""
          form
          type="submit"
          cssClasses="w-[155px] mx-auto tablet:mx-0"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
