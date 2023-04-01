import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./AboutUs.css";
import pic2 from "../images/note.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <NavBar />

      <div className="aboutUsContainer">
        <div className="imageContainerLogin">
          <img src={pic2} alt="" srcset="" />
        </div>

        <div className="aboutUsText">
          <h1>About Us</h1>
          <p>
            The Automated Task Management System is a software solution designed
            to help individuals; mainly the students manage their tasks and
            projects efficiently.
          </p>
          <p>
            The system development is driven by the passionate desire to help
            users achieve their goals and increase their productivity through
            the use of technology.
          </p>
        </div>
      </div>

      <div className="vision">
        <div className="aboutUsHeader">
          <h2>Vision</h2>
        </div>
        <div className="aboutUsPar">
          <p>
            Our vision is to be a leading provider of task management software
            that enables students to work more efficiently, effectively, and
            collaboratively. We aim to innovate and continuously improve our
            system to meet the evolving needs of our users and help them achieve
            their goals faster and with greater ease.
          </p>
          <p>
            We believe that our task management system can revolutionize the way
            students work and contribute to a more productive and successful
            world.
          </p>
        </div>
      </div>
      <div className="hr" />

      <div className="mission">
        <div className="aboutUsHeader">
          <h2>Mission</h2>
        </div>
        <div className="aboutUsPar">
          <p>
            Our mission is to provide a user-friendly and efficient task
            management system that helps students to prioritize tasks, allocate
            resources, and monitor progress towards their goals.
          </p>
          <p>
            We strive to create a system that empowers users to work smarter,
            not harder, and achieve their desired outcomes with ease.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
