import React, { useState } from "react";
import "./Signup.css";
import pic from "../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const navigate = useNavigate();

  const fnameChangeHandler = (e) => {
    setfname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setemail(e.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
    // const { name, value } = e.target;
    // setInput((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    // validateInput(e);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      // submit the form
    const user = fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fname,
        lastName: lname,
        email: email,
        password,
      }),
    }).then((res) => {
      if (res.ok) {
        navigate("/Login");
      }
    });
  }
  };

  return (
    <div class="signup">
      <div className="imageContainerLogin">
        <img src={pic} alt="" srcset="" />
      </div>
      <div className="signup-box">
        <div className="signup-text">
          <h1>Sign Up !</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <label>First Name</label>
            <input
              type="text"
              onChange={fnameChangeHandler}
              value={fname}
              name=""
              required
              placeholder=""
            />
          </div>
          <div class="user-box">
            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => setlname(e.target.value)}
              value={lname}
              name=""
              required
            />
          </div>
          <div class="user-box">
            <label>Email</label>
            <input
              type="email"
              onChange={emailChangeHandler}
              value={email}
              name=""
              required
            />
          </div>
          <div class="user-box">
            <label>Password</label>
            <input
              type="password"
              onChange={passwordChangeHandler}
              // onChange={onInputChange}
              value={password}
              name="password"
              // onBlur={validateInput}
              required
            />
          </div>
          <div class="user-box">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              // onBlur={validateInput}
              required
            />
            {passwordError && (
              <span className="err">{passwordError}</span>
            )}
          </div>
          <div className="user-box2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <div className="user-box2">
            {/* <a href="./Login">Submit</a> */}
            <p>
              {" "}
              <button type="submit" className="button">
                Submit
              </button>
              You are ready ! <Link to={"/Login"}>Login</Link>
              {/* <a href="Login">Login</a> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
