import React from "react";
import { Link } from "react-router-dom";
import Image from "./loginimage.svg";
import "./Login.css";
import { auth, provider, facebookProvider } from "../../firebase";

function Login() {
  const [signinEmail, setSignInEmail] = React.useState();
  const [signinPassword, setSignInPassword] = React.useState();
  const [signinUser, setSignInUser] = React.useState();

  const signInProvider = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => setSignInUser(result))
      .catch((err) => alert(err.message));
  };
  const signInFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => setSignInUser(result))
      .catch((err) => alert(err.message));
  };

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(signinEmail, signinPassword)
      .then((result) => setSignInUser(result))
      .catch((err) => alert(err.message));
     
      setSignInEmail('');
      setSignInPassword('');
  };
  return (
    <div className="login">
      <div className="login-box">
        <Link to="/">
          <h3 className="login-logo">Emailer</h3>
        </Link>
        <h3 className="login-header">LogIn</h3>
        <h4 className="login-sub-header">
          New to Emailer?{" "}
          <span className="signup-link">
            <Link to="signup">Create an account</Link>
          </span>
        </h4>
        <input className="email-input input" placeholder="email" onChange={(e)=>setSignInEmail(e.target.value)} type="email" />
        <input
          className="password-input input"
          placeholder="password"
          type="password"
          onChange={(e)=>setSignInPassword(e.target.value)}
        />
        <button className="login-button" onClick={signIn}>Log In</button>
        <hr />
        <h5>Or continue with</h5>
        <div className="different-methods">
            <button className="login-button login-social" onClick={signInProvider}><img className="google-logo" src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>Log In</button>
            <button className="login-button login-social" disabled={true} onClick={signInFacebook}><img className="facebook-logo" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>Log In</button>
        </div>
      </div>

      
      <img className="login-design" src={Image} alt="design" />

      
    </div>
  );
}

export default Login;
