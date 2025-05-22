import React from "react";
import "./social-links.css";

export default function SocialLinks() {
  return (
    <div className="side-bar-socials">
      <div>
        <a href="mailto: desmondgilmour@gmail.com"
          aria-label={`Visit my email profile`}
        >
          <i className="social-icon fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a 
          href="https://stackoverflow.com/users/12100881/desmond-gilmour" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit my stackoverflow profile`}
        >
          <i className="social-icon fa-brands fa-stack-overflow" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a 
          href="https://github.com/dessygil" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit my github profile`}
        >
          <i className="social-icon fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a 
          href="https://www.linkedin.com/in/desmond-gilmour-886b3a128/"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit my linkedin profile`}
        >
          <i className="social-icon fa-brands fa-linkedin-in" aria-hidden="true"></i>
        </a>
      </div>
      <div className="vertical"></div>
    </div>
  );
}