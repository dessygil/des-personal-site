import React from "react";
import "./contactme.css";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <h1 className="contact-me-title">What's Next?</h1>
      <div className="paragraph-container">
        <p className="contact-me-paragraph">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
      </div>
      <div className="button-container">
        <a
          className="contact-me-email-button"
          href="mailto: desmondgilmour@gmail.com"
        >
          Contact me!
        </a>
      </div>
    </div>
  );
}
