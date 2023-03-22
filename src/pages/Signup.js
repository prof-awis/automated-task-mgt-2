import React from "react";
import "./Signup.css";
import pic from "../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";

const Signup = () => {
  return (
    <div class="signup">
      <div className="imageContainerLogin">
        <img src={pic} alt="" srcset="" />
      </div>
      <div className="signup-box">
        <div className="signup-text">
          <h1>Sign Up !</h1>
        </div>

        <form>
          <div class="user-box">
            <label>First Name</label>
            <input type="text" name="" required="" placeholder="" />
          </div>
          <div class="user-box">
            <label>Last Name</label>
            <input type="text" name="" required="" />
          </div>
          <div class="user-box">
            <label>Email</label>
            <input type="email" name="" required="" />
          </div>
          <div class="user-box">
            <label>Password</label>
            <input type="password" name="" required="" />
          </div>
          <div class="user-box">
            <label>Confirm Password</label>
            <input type="password" name="" required="" />
          </div>
          <div className="user-box2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <div className="user-box2">
            <a href="./Login">Submit</a>
            <p>
              You are ready ! <a href="Login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
