import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <h3 className="app-logo">Emailer</h3>
        </Link>
      </div>
      <div className="nav-features">
        <Link to="/login">
          <button className="nav-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="nav-signup">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
