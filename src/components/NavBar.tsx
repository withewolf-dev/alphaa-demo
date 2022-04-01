import React from "react";
import "../styles/main.scss";

const NavBar = () => {
  return (
    <div className="navBarBlock">
      <div className="wrapperBlock">
        <div className="wrapper">HOME</div>
        <div className="wrapper">ANSWER</div>
        <div className="wrapper">LIVEBOARDS</div>
        <div className="wrapper">ASK QUESTIONS</div>
      </div>
      <div className="icon">?</div>
    </div>
  );
};

export default NavBar;
