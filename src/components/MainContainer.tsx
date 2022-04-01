import React from "react";
import "../styles/main-container.scss";
import SideNavBar from "./SideNavBar";
import Main from "./Main";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <SideNavBar />
      <Main />
    </div>
  );
};

export default MainContainer;
