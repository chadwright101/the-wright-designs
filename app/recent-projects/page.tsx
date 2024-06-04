import type { Metadata } from "next";

import ContactForm from "@/app/_components/home/contact/contact-form";
import RecentProjectsComponent from "@/app/_components/recent-projects/recent-projects-component";
import Button from "../_components/button";

export const metadata: Metadata = {
  title: "Recent Projects - The Wright Designs",
};

const RecentProjects = () => {
  return (
    <main>
      <h1 className="text-heading text-center mt-10 mb-12">Recent Projects</h1>
      <RecentProjectsComponent cssClasses="mb-12" />
      <hr className="text-blue/25 w-1/2 mx-auto mb-10" />
      <Button
        url="https://www.chadwright.dev/projects"
        target="_blank"
        pinkBackground
        cssClasses="mx-auto mb-14"
      >
        View project archive
      </Button>
      <ContactForm cssClasses="tablet:mb-10" />
    </main>
  );
};

export default RecentProjects;
