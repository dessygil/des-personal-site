import React from "react";

import "./home.css";
import MeIntro from "../../components/meintro/MeIntro";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Portfolio from "../../components/portfolio/Portfolio";
import BlogIntro from "../../components/blogintro/BlogIntro";
import ContactMe from "../../components/contactme/ContactMe";
import Molecule from "../../components/molecule/Molecule";

export default function Home() {

  return (
      <div className="main-page">
        <div className="main-page-molecule-opener">
          <MeIntro />
          <Molecule className="molecule"/>
        </div>
        <About />
        <Experience />
        <Portfolio />
        <BlogIntro />
        <ContactMe />
      </div>
  );
}

/* */
