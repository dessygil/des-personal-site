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
              As a sales professional with a dual degree in computer science and chemistry
              (GPA: 3.6), I've honed my skills across various platforms, from launching Vintage
              Academy, a vintage clothing business, to mastering patent-based software sales
              as a Sales Development Representative at Patsnap. Alongside, my fluency in languages
              such as Python, JavaScript, C/C++, and Java, and adeptness with tools like AWS,
              Docker, Nginx, and Git, gives me a unique edge.
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
