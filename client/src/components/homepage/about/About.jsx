import React from "react";
import "./about.css";
import "../../../index.css";

export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "Node.js",
    "React",
    "Python",
    "Django",
    "Java",
  ];

  return (
    <div className="content-box">
      <h2 className="numbered-heading">About Me</h2>
      <div className="content-box-inner">
        <div className="left-side">
          <div className="blurb">
            <p className="main-paragraph">
              Hello, my name is Desmond Gilmour and I'm an aspiring software
              engineer. My love for programming began when I decided to try a
              beginner python course in the summer of my chemistry degree
              because I noticed a trend that ALL biotech companies implement a
              platform for drug discovery. Immediately I knew software
              engineering was for me and as soon as next semester rolled around
              I enrolled a double major of computer science and chemistry.
            </p>
            <br></br>
            <p className="main-paragraph">
              Fast forward, I fell into sales as most people do at some point in
              their life, but I have always kept on working on side projects and
              taking side courses. I am excited to start this adventure and
              bring the many skills; hard and soft that I have gained through my
              different stages in my life.
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
          <img src="client/src/components/homepage/about/headshot.jpg" />
        </div>
      </div>
    </div>
  );
}
