import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="/dashboard">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>
        <a href="/signup">Go to Signup</a>
      </form>
    </div>
  );
};

export default Login;
