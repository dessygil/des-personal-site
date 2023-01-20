import React from "react";

import "./topbar.css";
import resume from "./DesmondGilmourResume.pdf";

export default function TopBar() {

  return (
    <div className="top">
      <a className="home-page-logo-link" href="/">
        <h2 className="site-logo">DG</h2>
      </a>
      <div className="top-right">
        <ul className="top-list">
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#About-anchor">
              01. About
            </a>
          </li>
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#Experience-anchor">
              02. Experience
            </a>
          </li>
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#Portfolio-anchor">
              03. Portfolio
            </a>
          </li>
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#Blog-anchor">
              04. Blog
            </a>
          </li>
          <li className="top-list-items-resume">
            <a className="top-list-resume-a-tag" href={resume} download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
/*

<li className="topListItems">
            <a className="top-list-item-tag" href="#experience-anchor">Experience</a>
          </li> */
