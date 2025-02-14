import React from "react";
import LandingComp from "./components/landing";
import About from "./components/about";

export default function Home() {
    return (
        <main className="mx-20">
            <LandingComp />
            <About />
        </main>
    )
}