import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <h3>Emailer</h3>
            </div>
            <div className="nav-features">
                <button className="nav-login">Login</button>
                <button className="nav-signup">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar
