import React from "react";
import "./sidebarsocials.css";

export default function SideBarSocials() {
  return (
    <div className="sideBarSocials">
      <div>
        <a href="mailto: desmondgilmour@gmail.com">
          <i className="socialIcon fa-solid fa-envelope"></i>
        </a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/12100881/desmond-gilmour">
          <i className="socialIcon fa-brands fa-stack-overflow"></i>
        </a>
      </div>
      <div>
        <a href="https://github.com/dessygil">
          <i className="socialIcon fa-brands fa-github"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/desmond-gilmour-886b3a128/">
          <i className="socialIcon fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="vertical"></div>
    </div>
  );
}
