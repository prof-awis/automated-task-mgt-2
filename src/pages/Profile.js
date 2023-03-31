import React from "react";
import NavBar from "../components/NavBar";
import "./Profile.css";
import ProfilePicture from "../images/remind.jpg";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";

// import { useState } from "react";

const Profile = () => {
  //   const [user, setUser] = useState({});
  // {user.firstName} {user.lastName}
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
            Name: Awino Emanuel <BiEdit />
          </div>
          <div>
            About: I am a jovial Soul <BiEdit />
          </div>
          <div>
            Phone: +254 790 487 436 <BiEdit />
          </div>
          <div>
            Email: awinoemanuel@gmail.com <BiEdit />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
