import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div class="login-box">
      <h2>Sign Up</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>First Name</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Last Name</label>
        </div>
        <div class="user-box">
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Confirm Password</label>
        </div>
        <a href="./Login">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default Signup;
