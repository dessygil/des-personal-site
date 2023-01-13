import React from "react";
import {Link} from "react-router-dom";

import "./topbar.css";
import resume from "./DesmondGilmourResume.pdf";
//import { Link } from "react-router-dom";

//TODO link each one of these to a certain part of the page don't make them new
//TODO make the list items mapped so it can be more reusable
//TODO remove the look effects from the links at the top

export default function TopBar() {
  return (
    <div className="top">
      <a className="home-page-logo-link" href="/">
        <h2 className="site-logo">DG</h2>
      </a>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItems">
            <a className="top-list-item-tag" href="#about-anchor">
              01.About
            </a>
          </li>
          <li className="topListItems">
            <a className="top-list-item-tag" href="#experience-anchor">
              02. Experience
            </a>
          </li>
          <li className="topListItems">
            <a className="top-list-item-tag" href="#portfolio-anchor">
              03. Portfolio
            </a>
          </li>
          <li className="topListItems">
            <a className="top-list-item-tag" href="#blog-intro-anchor">
              04. Blog
            </a>
          </li>
          <li className="topListItemsResume">
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
