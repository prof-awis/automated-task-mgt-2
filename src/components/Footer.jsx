import React from "react";
import "../components-css/Footer.css";
import { IoLogoSlack, IoEarth } from "react-icons/io5";
import {
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebookSquare,
  FaCopyright,
} from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="logoBar">
        <IoLogoSlack />
        {/* <IoEarth /> */}
        <span>AwTask</span>
      </div>
      <div className="footerContent">
        <p>
          {" "}
          <a href="">About Us</a>
        </p>
      </div>
      <div className="footerContent">
        {/* copyright */}
        <p>
          {/* <FaCopyright /> */}
          <AiOutlineCopyright />
          <label> Copyright 2023 All Rights Reserved</label>
        </p>
      </div>
      <div className="footerContent">
        <p>
          <a href="">Contact Us</a>
        </p>
        <p>
          <FaTwitter />
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebookSquare />
        </p>
      </div>
    </div>
  );
}

export default Footer;
