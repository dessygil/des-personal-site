import React from "react";
import "./topbar.css";
import resume from "./DesmondGilmourResume.pdf"
//import { Link } from "react-router-dom";

//TODO add my logo to the top right
//TODO link each one of these to a certain part of the page don't make them new
//TODO make the list items mapped so it can be more reusable
//TODO remove the look effects from the links at the top

export default function TopBar() {
  return (
    <div className="top">
      <h2 className="site-logo">
        DG
      </h2>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItems">
            <a href="#about-anchor">1. About</a>
          </li>
          <li className="topListItems">
            <a href="#experience-anchor">2. Experience</a>
          </li>
          <li className="topListItems">
            <a href="#portfolio-anchor">3. Portfolio</a>
          </li>
          <li className="topListItems">
            <a href="#blog-intro-anchor">4. Blog</a>
          </li>
          <li className="topListItemsResume">
            <a
              className="top-list-resume-a-tag"
              href={resume}
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
