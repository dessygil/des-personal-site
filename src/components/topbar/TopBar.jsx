import React from 'react';
import "./topbar.css"

//TODO add my logo to the top right
export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItems">1. About</li>
            <li className="topListItems">2. Portfolio</li>
            <li className="topListItems">3. Contact</li>
            <li className="topListItems">4. Blog</li>
            <li className="topListItemsResume">Resume</li>
          </ul>
        </div>
    </div>
  )
}
