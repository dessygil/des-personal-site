import React from "react";
import "./contactme.css";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <h1 className="contact-me-title">What's Next?</h1>
      <div className="paragraph-container">
        <p className="contact-me-paragraph">
          My inbox is open for any new opportunity. Whether you have a question
          or just want to say hi, shoot me a message and I'll do my best to get
          back to you.
        </p>
      </div>
      <div className="button-container">
        <button className="button-56 button_center_and_margin">
          <a
            className="contact-me-email-button global-button"
            href="mailto: desmondgilmour@gmail.com"
          >
            Contact me!
          </a>
        </button>
      </div>
    </div>
  );
}
