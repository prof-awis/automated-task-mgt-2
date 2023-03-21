import React from "react";
import LeftSide from "../components/LeftSide";
import NavBar from "../components/NavBar";
import RightSide from "../components/RightSide";
import SideBar from "../components/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main">
      <SideBar />
      <section className="home-section">
        <NavBar />

        <div className="below-navbar">
          <LeftSide />
          <RightSide />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
