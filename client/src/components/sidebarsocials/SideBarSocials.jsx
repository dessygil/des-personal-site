import React from "react";
import "./social-links.css";

export default function SocialLinks() {
  return (
    <div className="side-bar-socials">
      <div>
        <a href="mailto: desmondgilmour@gmail.com">
          <i className="social-icon fa-solid fa-envelope"></i>
        </a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/12100881/desmond-gilmour">
          <i className="social-icon fa-brands fa-stack-overflow"></i>
        </a>
      </div>
      <div>
        <a href="https://github.com/dessygil">
          <i className="social-icon fa-brands fa-github"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/desmond-gilmour-886b3a128/">
          <i className="social-icon fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="vertical"></div>
    </div>
  );
}