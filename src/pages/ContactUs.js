import React, { useRef, useState } from "react";
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
import { VscFeedback } from "react-icons/vsc";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_tcf4lgx",
        "template_axbiqs9",
        form.current,
        "asWmJCpqsGF_GchTH"
      )
      .then(
        (result) => {
          setUserName("");
          setUserEmail("");
          setFeedback("");
          // show the user a success message
          // <div>submitted successfully</div>;
        },
        (error) => {
          // show the user an error
        }
      );
  };
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
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="feedbackHeader">
            <h1>Give Your Feedback</h1>
          </div>
          <div className="feedbackInput">
            <GoPerson className="feedbackIcons" />
            <input
              type="text"
              name="user_name"
              id=""
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="feedbackInput">
            <GoMail className="feedbackIcons" />
            <input
              type="email"
              name="user_email"
              id=""
              placeholder="Your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="feedbackInput">
            <VscFeedback className="feedbackIcons" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              // value={message}
              placeholder="Give your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <div className="feedbackInput">
            <button className="">
              <input
                className="button"
                type="submit"
                value="send"
                // onClick={() => resetForm()}
              />
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
