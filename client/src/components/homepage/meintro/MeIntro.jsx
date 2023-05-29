import React from "react";

import "./meintro.css";

export default function MeIntro() {
  const one = <h3 className="one">Hi, my name is</h3>;
  const two = <h1 className="two">Desmond Gilmour.</h1>;
  const three = (
    <p className="three">
      I'm an aspiring sales engineer, hobby software developer, and chemistry enthusiast.
      I have a dual degree in chemistry and computer science and a  history of hitting quota.
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
