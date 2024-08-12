"use client";

import { useState, useRef, useEffect } from "react";

const RightForYouComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]!.style.maxHeight =
        contentRefs.current[openIndex]!.scrollHeight + "px";
    }
  }, [openIndex]);

  return (
    <section className="mb-15">
      <h2 className="text-subheading mb-10 pb-1 border-b-4 border-pink tablet:col-span-2 desktopSmall:col-span-1">
        Are we right for you?
      </h2>
      <p className="mb-4">
        Our vast experience in the industry means that, although we might not
        have seen it all just yet, we&apos;re pretty close.
      </p>
      <p>
        Our team has worked with clients from a wide range of industries, each
        with a unique set of problems that needed solving. We&apos;re proud to
        say that we always deliver to the highest standard, regardless of the
        project&apos;s size.
      </p>
      <ul className="mt-10 grid gap-5">
        {accordionData.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-6 bg-blue text-white w-full rounded-md ease-in-out duration-150 hover:cursor-pointer ${
              openIndex !== index ? "desktopSmall:hover:bg-pink" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <p className="font-medium text-[18px] text-left text-white flex justify-between w-full">
              {item.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                className={`ease-in-out duration-150 ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              >
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </p>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className={`transition-max-height duration-200 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                maxHeight:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
              }}
            >
              <p className="mt-4 text-white pr-8">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const accordionData = [
  {
    question: "Struggling with a poorly designed/developed WordPress website?",
    answer:
      "Not a problem! This is one of the most common requests we receive from clients, and its become our specialty. We'll handle everything from redesign and development to domain and hosting transfer.",
  },
  {
    question: "Want to switch web designers or developers but are unsure how?",
    answer:
      "No stress! Our team will work directly with your current provider to ensure all your valuable online assets (website, domain, emails, databases, etc.) are safely stored and transferred, keeping you in the loop throughout the process.",
  },
  {
    question:
      "Looking for a team to keep your ever-changing website up-to-date and secure?",
    answer:
      "Yes, we do that too! A maintenance package tailored to your needs will keep your website running smoothly and securely, so you can focus on your business.",
  },
  {
    question:
      "Have an idea for an app or online solution but don't know where to start?",
    answer:
      "You're at the right place! A quick consultation with our team lead, Chad, will provide a clear and realistic roadmap of development, costs, and timelines involved in bringing your idea to life.",
  },
  {
    question:
      "Tired of being boxed in by restrictive and costly e-commerce themes and templates?",
    answer:
      "We hear you! Our team can build a beautiful front end tailored to your taste that integrates directly with your existing Shopify, WooCommerce, or BigCommerce backend. This way, you get the best of both worlds without needing to set up shop on another platform.",
  },
];

export default RightForYouComponent;
