import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Profile.css";
import ProfilePicture from "../images/remind.jpg";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";

// import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});
  // {user.firstName} {user.lastName}
  useEffect(() => {
    const newUser = localStorage.getItem("user");
    setUser(JSON.parse(newUser));
  }, []);

  return (
    <div className="profilePage-container">
      <NavBar />

      <section className="profilePageContainer">
        <div className="imageContainerProfilePage">
          <img src={ProfilePicture} alt="" srcSet="" />
          <p>
            You can edit your profile picture <BiEdit />
          </p>
        </div>
        <div className="profilePageInfo">
          <h1>Profile</h1>
          <div>
            Name: {user.firstName} {user.lastName} <BiEdit />
          </div>
          <div>
            Email: {user.email}
            <BiEdit />
          </div>
          <div>
            About: <BiEdit />
          </div>
          <div>
            Phone: <BiEdit />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
