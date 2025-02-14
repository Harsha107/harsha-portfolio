import React from "react";
import LandingComp from "./components/landing";
import ProjectsComp from "./components/projects";
import ContactComp from "./components/contact";
import SkillsComp from "./components/skills";
// import About from "./components/about";

export default function Home() {
    return (
        <main className="mx-20">
            <LandingComp />
            {/* <About /> */}
            <ProjectsComp />
            <SkillsComp />
            <ContactComp />
        </main>
    )
}