import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="addUser">
      <h3>signup</h3>
      <form className="adduserform">
        <div className="inputgroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="paasword"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
          />
          <button type="submit" class="btn btn-success">
            Sign up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have account ?</p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
