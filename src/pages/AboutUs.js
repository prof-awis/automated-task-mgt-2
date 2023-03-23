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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sit
            soluta beatae vero iure corrupti eveniet perspiciatis aperiam dolor
            maxime quas officiis recusandae excepturi nobis nihil suscipit
            dolore, ipsa in.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            corrupti!
          </p>
        </div>
      </div>

      <div className="vision">
        <div className="aboutUsHeader">
          <h2>Vision</h2>
        </div>
        <div className="aboutUsPar">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sit
            soluta beatae vero iure corrupti eveniet perspiciatis aperiam dolor
            maxime quas officiis recusandae excepturi nobis nihil suscipit
            dolore, ipsa in.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            corrupti!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sit
            soluta beatae vero iure corrupti eveniet perspiciatis aperiam dolor
            maxime quas officiis recusandae excepturi nobis nihil suscipit
            dolore, ipsa in.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            corrupti!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
