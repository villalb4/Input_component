import React from "react";
import "./SideBar.css";

function SideBar() {
  return(
    <div className="sidebar">
      <div>
        <span className="logo">Dev<span className="logo_challenge">challenge.io</span></span>
      </div>
      <div className="pages">
        <ul className="ul_links">
          <li className="link">Colors</li>
          <li className="link">Typography</li>
          <li className="link">Spaces</li>
          <li className="link">Buttons</li>
          <li className="link">Inputs</li>
          <li className="link">Grid</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;