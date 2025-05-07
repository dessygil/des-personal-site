
import React from "react";
import "./contactme.css";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <h1 className="contact-me-title">Say hi.</h1>
      <div className="paragraph-container">
        <p className="contact-me-paragraph">
          I love to solve complex technical challenges and drive business results. Whether you have a question
          or just want to say hi, shoot me a message and I'll get back to you.
        </p>
      </div>
      <div className="button-container">
        <a
          className="contact-me-email"
          href="mailto:desmondgilmour@gmail.com"
        >
          hello@desmondgilmour.com
        </a>
      </div>
    </div>
  );
}
