import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import pic from "../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";
import { Link } from "react-router-dom";
import baseURL from "../API/api";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [passwordError, setPasswordError] = useState("");

  const changeFormHandler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPasswordError("");

    fetch(baseURL + "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token && res.user) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          window.location.reload();
        } else {
          setPasswordError("Invalid credentials. ");
        }
      })

      .catch((error) => {
        console.log(error);
      });
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
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={changeFormHandler}
              placeholder="Enter Your Email Address"
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
              placeholder="Enter Your Password"
              required
            />
          </div>
          {passwordError && <span className="err">{passwordError}</span>}

          <div className="user-box3">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>

          <div className="user-box2">
            <button type="submit" className="button">
              Login
            </button>
            {/* <a href="/dashboard">Login</a> */}
            <p>
              You do not have an accout ? <Link to={"/SignUp"}>Sign Up</Link>
              {/* <a href="Signup">Sign Up</a> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
