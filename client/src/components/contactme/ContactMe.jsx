
import React from "react";
import "./contactme.css";
import nicoyaImage from "./nicoya-booth.jpg";

export default function ContactMe() {
  return (
    <div className="contact-section" id="Contact-anchor">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-heading">Say hi.</h2>
          <a href="mailto:desmondgilmour@gmail.com" className="contact-email">
            hello@desmondgilmour.com
          </a>
          <p className="contact-description">
            I love to solve complex technical challenges and drive business results. Currently based in Toronto, Canada.
          </p>
          <div className="social-links">
            <a href="https://stackoverflow.com/users/12100881/desmond-gilmour">
              <i className="social-icon fa-brands fa-stack-overflow"></i>
            </a>
            <a href="https://github.com/dessygil">
              <i className="social-icon fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/desmond-gilmour-886b3a128/">
              <i className="social-icon fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <img src={nicoyaImage} alt="Nicoya Conference Booth" className="contact-image" />
        </div>
      </div>
    </div>
  );
}
