import React from 'react';
import "./topbar.css";
//import { Link } from "react-router-dom";

//TODO add my logo to the top right
//TODO link each one of these to a certain part of the page don't make them new
//TODO make the list items mapped so it can be more reusable

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItems"><a></a>1. About</li>
            <li className="topListItems">2. Experience</li>
            <li className="topListItems">3. Portfolio</li>
            <li className="topListItems">4. Blog</li>
            <li className="topListItemsResume"><a className="top-list-resume-a-tag" href="./DesmondGilmourResume.pdf" download="DesmondGilmourResume.pdf">Resume</a></li>
          </ul>
        </div>
    </div>
  )
}
