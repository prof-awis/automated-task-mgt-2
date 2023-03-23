import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./ContactUs.css";
import pic2 from "../images/contact.jpg";
import {
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebookSquare,
  FaPhone,
} from "react-icons/fa";
import { GoLocation, GoMail, GoPerson } from "react-icons/go";
// import { FcFeedback } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <NavBar />

      <div className="contactUsContainer">
        <div className="imageContainerLogin">
          <img src={pic2} alt="" srcset="" />
        </div>
        {/* <SideBar /> */}

        <div className="contactUsText">
          <div className="getInTouch">
            <div className="getInTouchHeader">
              <h1>Contact Us</h1>
            </div>
            <div className="details">
              <div className="detailsContent">
                <FaPhone className="detailsIcons" />
                <h4>Phone Number</h4>
                <p>+254 7031 61022</p>
              </div>
              <div className="detailsContent">
                <GoLocation className="detailsIcons" />
                <h4>Postal Address</h4>
                <p>P.O. BOX 9-190050, Nairobi</p>
              </div>
              <div className="detailsContent" h1>
                <GoMail className="detailsIcons" />
                <h4>Email Address</h4>
                <p>awinoemanuel@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="connectWithUS">
            <div className="connectWithUsHeader">
              <h2>Connect With Us !</h2>
            </div>

            <div className="connectWithUsIcons">
              <FaTwitter />
              <FaWhatsapp />
              <FaInstagram />
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <form action="">
          <div className="feedbackHeader">
            <h1>Give Your Feedback</h1>
          </div>
          <div className="feedbackInput">
            <GoPerson className="feedbackIcons" />
            <input type="text" name="" id="" placeholder="Your Name" />
          </div>
          <div className="feedbackInput">
            <GoMail className="feedbackIcons" />
            <input type="email" name="" id="" placeholder="Your Email" />
          </div>
          <div className="feedbackInput">
            <VscFeedback className="feedbackIcons" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Give your feedback..."
            ></textarea>
          </div>
          <div className="feedbackInput">
            <button className="button">
              {/* <input type="button" value="" /> */}
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
