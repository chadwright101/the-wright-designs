import type { Metadata } from "next";

import ContactForm from "@/app/_components/contact-form";
import RecentProjectsComponent from "@/app/_components/recent-projects/recent-projects-component";
import Button from "../_components/button";

export const metadata: Metadata = {
  title: "Recent Projects - The Wright Designs",
};

const RecentProjects = () => {
  return (
    <main className="tablet:mb-10 mt-[160px] tablet:mt-[150px]">
      <h1 className="text-heading text-center mt-10 mb-15">Recent Projects</h1>
      <RecentProjectsComponent cssClasses="mb-12" />
      <hr className="text-blue/25 mx-auto mb-10" />
      <Button
        url="https://www.chadwright.dev/projects"
        target="_blank"
        buttonColor="pink"
        cssClasses="w-full mb-14 tablet:mx-auto tablet:w-auto"
      >
        Detailed project archive
      </Button>
      <div id="contact" className="-translate-y-32"></div>
      <ContactForm cssClasses="-mx-7 px-7 py-10 tablet:-mx-10 tablet:px-10 desktopSmall:mx-0 desktopSmall:rounded-lg desktopSmall:p-6" />
    </main>
  );
};

export default RecentProjects;
