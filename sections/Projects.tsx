import { DesktopProjects } from "@/components/ui/DesktopProjects";
import { MobileProjects } from "@/components/ui/MobileProjects";
import React from "react";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="hidden md:block">
        <DesktopProjects />
      </div>
      <div className="md:hidden">
        <MobileProjects />
      </div>
    </section>
  );
};
