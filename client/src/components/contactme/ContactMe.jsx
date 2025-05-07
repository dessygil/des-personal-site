
import React from "react";
import "./contactme.css";
import nicoyaImage from "./nicoya-booth.jpg";

export default function ContactMe() {
  return (
    <section className="contact-section" id="Contact-anchor">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-heading">Say hi.</h2>
          <a href="mailto:desmondgilmour@gmail.com" className="contact-email">
            hello@desmondgilmour.com
          </a>
          <p className="contact-description">
            I'm passionate about transforming complex technical challenges into business results. Always open to new opportunities and interesting conversations.
          </p>
        </div>
        <div className="contact-right">
          <img src={nicoyaImage} alt="Nicoya Conference Booth" className="contact-image" />
        </div>
      </div>
    </section>
  );
}
