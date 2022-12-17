import React from "react";

import "./meintro.css";

export default function MeIntro() {
  const one = <h3 className="one">Hi, my name is</h3>;
  const two = <h1 className="two">Desmond Gilmour.</h1>;
  const three = (
    <p className="three">
      I'm an aspiring software engineer that will specialize on the backend.
      Currently I am focused on learning all the world has to offer and
      continuing to build out my personal website.
    </p>
  );

  const four = (
    <a className="four" href="mailto: desmondgilmour@gmail.com">
      Contact me!
    </a>
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
