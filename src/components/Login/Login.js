import React from 'react'
import { Link } from 'react-router-dom'
import Image from "./Rangitikei.svg";
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <div className="login-box">
                <Link to="/">
                <h3 className="login-logo">Emailer</h3>
                </Link>
                <h3 className="login-header">LogIn</h3>
                <h4 className="login-sub-header">New to Emailer? <span className="signup-link"><Link to="signup">Create an account</Link></span></h4>
                <input className="email-input input" placeholder="email" type="email"/>
                <input className="password-input input" placeholder="password" type="password"/>
                <button className="login-button">Log In</button>
            </div>
            <div className="login-design">
                <img src={Image} alt="design"/>
            </div>
        </div>
    )
}

export default Login
