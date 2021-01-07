import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="signup-box">
        <Link to="/">
          <h3 className="signup-logo">Emailer</h3>
        </Link>
        <h3 className="signup-header">Welcome to Emailer</h3>
        <h4 className="signup-sub-header">Engage with your audience. Write once and send your mail to multiple people at once. Do this all here at Emailer.</h4>
        <h4 className="signup-sub-header signup-mobile">
          Already having an account at Emailer?{" "}
          <br className="line-breaker"/>
          <span className="signup-link">
            <Link to="/login">Login In</Link>
          </span>
        </h4>
        <input className="email-input input" placeholder="email" type="email" />
        <input
          className="password-input input"
          placeholder="password"
          type="password"
        />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
