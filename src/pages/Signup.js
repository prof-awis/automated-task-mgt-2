import React, { useState } from "react";
import "./Signup.css";
import pic from "../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // const [input, setInput] = useState({
  //   // username: '',
  //   password: "",
  //   confirmPassword: "",
  // });

  // const [error, setError] = useState({
  //   // username: '',
  //   password: "",
  //   confirmPassword: "",
  // });

  // const onInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   validateInput(e);
  // };

  // const validateInput = (e) => {
  //   let { name, value } = e.target;
  //   setError((prev) => {
  //     const stateObj = { ...prev, [name]: "" };

  //     switch (name) {
  //       // case "username":
  //       //   if (!value) {
  //       //     stateObj[name] = "Please enter Username.";
  //       //   }
  //       //   break;

  //       case "password":
  //         if (!value) {
  //           stateObj[name] = "Please enter Password.";
  //         } else if (input.confirmPassword && value !== input.confirmPassword) {
  //           stateObj["confirmPassword"] =
  //             "Password and Confirm Password does not match.";
  //         } else {
  //           stateObj["confirmPassword"] = input.confirmPassword
  //             ? ""
  //             : error.confirmPassword;
  //         }
  //         break;

  //       case "confirmPassword":
  //         if (!value) {
  //           stateObj[name] = "Please enter Confirm Password.";
  //         } else if (input.password && value !== input.password) {
  //           stateObj[name] = "Password and Confirm Password does not match.";
  //         }
  //         break;

  //       default:
  //         break;
  //     }

  //     return stateObj;
  //   });
  // };

  const navigate = useNavigate();

  const fnameChangeHandler = (e) => {
    setfname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setemail(e.target.value);
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
              // placeholder="Enter Confirm Password"
              // value={input.confirmPassword}
              // onChange={onInputChange}
              // onBlur={validateInput}
              required
            />
            {/* {error.confirmPassword && (
              <span className="err">{error.confirmPassword}</span>
            )} */}
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
