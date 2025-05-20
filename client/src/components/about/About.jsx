import React from "react";

import "./about.css";
import "../../index.css";
import headshot from "./headshot.jpg";

export default function About() {
  const skills = [
    "Pytorch",
    "Django",
    "RDKit",
    "Datadog/Grafana",
    "Qiskit",
    "AWS",
  ];

  return (
    <div id="About-anchor" className="content-box">
      <h2 className="numbered-heading">About Me</h2>
      <div className="content-box-inner">
        <div className="left-side">
          <div className="blurb">
            <p className="main-paragraph">
              I stumbled into sales during the pandemic, knocking on doors in the summer heat to sell pest control. It was tough, but it taught me resilience and the art of connecting with people. Around the same time, I co-founded Vintage Academy, an online vintage clothing store that grew to over $2,000 in monthly recurring revenue. These early experiences sparked my passion for sales and entrepreneurship.
            </p>
            <br></br>
            <p className="main-paragraph">
              Fast forward to today, I have over four years of sales experience across diverse industries. At I-MED Pharma, I delved into pharmaceutical sales; at PatSnap, I specialized in AI-driven patent software solutions; and currently, at Nicoya Life Sciences, I serve as an Account Executive. In this role, I lead the sales of cutting-edge surface plasmon resonance (SPR) devices, leveraging digital microfluidics to advance early-stage research. My responsibilities have spanned from spearheading sales development initiatives to leading SDR teams and optimizing sales operations, all while integrating AI tools to enhance efficiency and outcomes.
            </p>
            <br></br>
            <p className="main-paragraph">
              Beyond sales, I'm deeply interested in technology. Holding a dual degree in Chemistry and Computer Science (GPA: 3.6), I've earned certifications in AWS, Datadog, and IBM Quantum Computing. In my spare time, I explore the intersection of AI and drug discovery, constantly seeking ways to bridge complex technical concepts with client-friendly solutions.
            </p>
            <br></br>
            <p className="main-paragraph">
              I'm on a journey to become a trusted technical advisor and enterprise Account Executive in the SaaS and biotech landscapes, combining my sales expertise with a strong technical foundation to deliver value to clients.
            </p>
            <br></br>
            <p className="main-paragraph">
              Here are few technologies I have been working with recently:
            </p>
          </div>

          <ul className="skills-list">
            {skills &&
              skills.map((skill, i) => (
                <li className="skills-list-item" key={skill}>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div className="right-side">
          <div className="img-wrapper">
            <img
              className="headshot"
              src={headshot}
              alt="Desmond's Professional Headshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


//Hello, my name is Desmond Gilmour and I'm a software engineer at the intersection of chemistry and computer science. My love for programming began when I decided to try a beginner python course in the summer of my chemistry degree because I noticed a trend that ALL biotech companies implement a platform for drug discovery. Immediately I knew software engineering was for me and as soon as next semester rolled around I enrolled a double major of computer science and chemistry.Fast forward, I now have developed a clear passion for lab automation and AI for material/drug discovery as it allows research scientists to increase reproducibility and the pace of innovations.
