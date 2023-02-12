import React from "react";

import "./about.css";
import "../../../index.css";
import headshot from "./headshot.jpg";

export default function About() {
  const skills = [
    "Pytorch",
    "Django",
    "RDKit",
    "DeepChem",
    "Numpy/Pandas",
    "React",
  ];

  return (
    <div id="About-anchor" className="content-box">
      <h2 className="numbered-heading">About Me</h2>
      <div className="content-box-inner">
        <div className="left-side">
          <div className="blurb">
            <p className="main-paragraph">
              Hello, my name is Desmond Gilmour and I'm a software engineer at
              the intersection of chemistry and computer science. My love for
              programming began when I decided to try a beginner python course
              in the summer of my chemistry degree because I noticed a trend
              that ALL biotech companies implement a platform for drug
              discovery. Immediately I knew software engineering was for me and
              as soon as next semester rolled around I enrolled a double major
              of computer science and chemistry.
            </p>
            <br></br>
            <p className="main-paragraph">
              Fast forward, I now have developed a clear passion for lab
              automation and AI for material/drug discovery as it allows
              research scientists to increase reproducibility and the pace of
              innovations.
            </p>
            <br></br>
            <p className="main-paragraph">
              Here are few technologies I have been working with recently:
            </p>
          </div>

          <ul className="skills-list">
            {skills &&
              skills.map((skill, i) => (
                <li className="skills-list-item" key={i}>
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
