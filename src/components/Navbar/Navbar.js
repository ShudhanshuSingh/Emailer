import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import Logo from "./appLogo.png"
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
function Navbar({ email }) {
  const dispatch =useDispatch();
  const signOut = () =>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          
          <h3 className="app-logo"><img className="logo" src={Logo} />Emailer</h3>
        </Link>
      </div>
      {
        email?(
          <div className="nav-features">
            <h3 className="email">{email}</h3>
            <button className="nav-signup" onClick={signOut}>Sign Out</button>
          </div>
        ):(
        <div className="nav-features">
          <Link to="/login">
            <button className="nav-login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="nav-signup">Sign up</button>
          </Link>
        </div>
        )
      }
      
    </div>
  );
}

export default Navbar;
