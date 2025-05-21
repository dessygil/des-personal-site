import React from "react";
import "./hero-section.css";

export default function HeroSection() {
  const one = <h3 className="one">Hi, my name is </h3>;
  const two = <h1 className="intro-text"><span className="name-underline">Desmond Gilmour</span>.</h1>;
  const three = (
    <p className="three">
      Passionate about transforming complex technical challenges into profitable business results, I       leverage my scientific background and software expertise to uncover client needs, deliver            innovative solutions, and consistently exceed sales targets.
    </p>
  );

  const four = (
    <button className="button-56 four-button" role="button">
      <a className="four" href="mailto: desmondgilmour@gmail.com">
        Contact me!
      </a>
    </button>
  );

  const items = [one, two, three, four];

  return (
      <div className="meIntro-container">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
  );
}