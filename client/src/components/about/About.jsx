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
    "Next.js",
    "AWS",
  ];

  return (
    <div id="About-anchor" className="content-box">
      <h2 className="numbered-heading">About Me</h2>
      <div className="content-box-inner">
        <div className="left-side">
          <div className="blurb">
            <p className="main-paragraph">
              As a sales professional with a dual degree in computer science and chemistry
              (GPA: 3.6), I've honed my skills across various roles, from launching Vintage
              Academy, a vintage clothing business, to mastering patent-based software sales
              as a Sales Development Representative at Patsnap and most recently sales development
              at Nicoya selling a surface plasmon resonance device that leverages the unique
              advantages of digital microfluidics. I continue to keep my technical skills sharp,
              by building side project in languages such as Python, JavaScript, C/C++,
              and Java, and gaining certifications with tools like AWS, Datadog, Kubernetes.
            </p>
            <br></br>
            <p className="main-paragraph">
              Blending this extensive sales experience with technical acumen, I'm optimally equipped
              to thrive as a Sales Engineer in a SaaS environment, proficiently bridging the gap
              between complex technical concepts and client-friendly dialogue. This distinctive
              blend of skills positions me uniquely in the constantly evolving SaaS landscape.
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
