"use client";

import { useEffect, useRef } from "react";

import Button from "@/app/_components/button";
import RecentProjectsAppsTable from "@/app/_components/recent-projects/apps/recent-projects-apps-table";

const RecentProjectsApps = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 960) {
            entry.target.classList.add("scroll-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="mb-10 overflow-x-auto">
        <div ref={scrollRef} className="min-w-[1000px]">
          <RecentProjectsAppsTable />
        </div>
      </section>

      <Button
        url="https://www.chadwright.dev/projects"
        target="_blank"
        buttonColor="blue"
        outline
        cssClasses="w-full mb-14 tablet:mx-auto tablet:w-auto"
      >
        Detailed app archive
      </Button>
    </>
  );
};

export default RecentProjectsApps;
