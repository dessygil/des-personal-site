import React from 'react'
import "./sidebarsocials.css"


//TODO add email icon to this side 
//TODO add email to other side like brittney chiangs
export default function SideBarSocials() {
  return (
    <div className="sideBarSocials">
        <div>
          <i className="socialIcon fa-solid fa-envelope"></i>
        </div>
        <div>
            <i className="socialIcon fa-brands fa-stack-overflow"></i>
        </div>
        <div>
            <i className="socialIcon fa-brands fa-github"></i>
        </div>
        <div>
            <i className="socialIcon fa-brands fa-linkedin-in"></i>
        </div>
        <div className="vertical">

        </div>
    </div>
  )
}
