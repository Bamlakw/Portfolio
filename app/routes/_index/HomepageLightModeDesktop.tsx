"use client";
import * as React from "react";
import { IntroSection } from "./IntroSection";
import { WorkSection } from "./WorkSection";
import { ProjectsGrid } from "./ProjectsGrid";
import { MoreProjectsCTA } from "./MoreProjectsCTA";

const HomepageLightModeDesktop: React.FC = () => {
  return (
    <div className="flex overflow-hidden gap-2.5 items-center p-10 bg-white max-md:px-5">
      <main className="self-stretch my-auto bg-white min-w-60 w-[1360px]">
        <div className="w-full max-md:max-w-full">
          <IntroSection />
          <div className="mt-44 w-full max-md:mt-10 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <WorkSection />
              <section className="flex flex-col mt-32 w-full leading-tight text-stone-950 max-md:mt-10 max-md:max-w-full">
                <ProjectsGrid />
                <MoreProjectsCTA />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomepageLightModeDesktop;
