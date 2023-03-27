import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import pic from "../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const changeFormHandler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  return (
    <div className="login">
      <div className="imageContainerLogin">
        <img src={pic} alt="" srcSet="" />
      </div>
      <div className="login-box">
        <div className="login-text">
          <h1>Welcome Back!</h1>
          <p>Enter Your Login Details</p>
        </div>
        <form>
          <div className="user-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={changeFormHandler}
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="user-box">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={changeFormHandler}
              placeholder="Your Password"
              required
            />
          </div>
          <div className="user-box3">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <div className="user-box2">
            <a href="/dashboard">Login</a>
            <p>
              You do not have an accout ? <a href="Signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
