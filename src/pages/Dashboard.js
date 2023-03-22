import React from "react";
import BelowNavBar from "../components/BelowNavBar";
import LeftSide from "../components/LeftSide";
import NavBar from "../components/NavBar";
import RightSide from "../components/RightSide";
import SideBar from "../components/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main">
      <NavBar />
      <section className="home-section">
        <BelowNavBar />

        <LeftSide />

        {/* <RightSide /> */}
      </section>
    </div>
  );
};

export default Dashboard;
