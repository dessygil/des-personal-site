import React from "react";

import "./home.css";
import MeIntro from "../../components/homepage/meintro/MeIntro";
import About from "../../components/homepage/about/About";
import Experience from "../../components/homepage/experience/Experience";
import Portfolio from "../../components/homepage/portfolio/Portfolio";
import BlogIntro from "../../components/homepage/blogintro/BlogIntro";
import ContactMe from "../../components/homepage/contactme/ContactMe";


export default function Home() {

  return (
      <div className="main-page">
        <MeIntro />
        <About />
        <Experience />
        <Portfolio />
        <BlogIntro />
        <ContactMe />
      </div>
  );
}

/* */
