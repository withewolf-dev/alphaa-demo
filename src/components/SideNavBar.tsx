import React from "react";
import "../styles/sidenavbar.scss";

const SideNavBar = () => {
  return (
    <div className="leftPanel">
      {" "}
      <p className="navBlock">stockal</p>
      <div className="navHeaderBlock">
        <h4 className="headerOne">Business Growth</h4>
        <h4 className="headerTwo">New Development</h4>
      </div>
      <p className="footerLogo">alphaa.ai</p>
    </div>
  );
};

export default SideNavBar;
