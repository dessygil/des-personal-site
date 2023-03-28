import React from "react";

import "./meintro.css";

export default function MeIntro() {
  const one = <h3 className="one">Hi, my name is</h3>;
  const two = <h1 className="two">Desmond Gilmour.</h1>;
  const three = (
    <p className="three">
      I'm a research software engineer interested in combining my computer 
      science and chemistry background to help bring drugs to market faster 
      using AI/ML for drug discovery and lab automation. 
    </p>
  );

  const four = (
    <button class="button-56 four-button" role="button">
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
