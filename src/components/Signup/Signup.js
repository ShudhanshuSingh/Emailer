import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { auth, provider, facebookProvider } from "../../firebase";

function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signUpUser, setSignUpUser] = React.useState();

  const signInFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => setSignUpUser(result))
      .catch((err) => alert(err.message));
  };

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => setSignUpUser(result))
      .catch((err) => alert(err.message));
  };

  const providerSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => setSignUpUser(result))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signup">
      <div className="signup-box">
        <Link to="/">
          <h3 className="signup-logo">Emailer</h3>
        </Link>
        <h3 className="signup-header">Welcome to Emailer</h3>
        <h4 className="signup-sub-header">
          Engage with your audience. Write once and send your mail to multiple
          people at once. Do this all here at Emailer.
        </h4>
        <h4 className="signup-sub-header signup-mobile">
          Already having an account at Emailer? <br className="line-breaker" />
          <span className="signup-link">
            <Link to="/login">Log In</Link>
          </span>
        </h4>
        <input className="email-input input" placeholder="email" type="email" />
        <input
          className="password-input input"
          placeholder="password"
          type="password"
        />
        <button className="signup-button" onClick={signUp}>Sign Up</button>
        <hr />
        <h5>Or continue with</h5>
        <div className="different-methods">
            <button className="login-button login-social" onClick={providerSignIn}><img className="google-logo" src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>Log In</button>
            <button className="login-button login-social" disabled={true} onClick={signInFacebook}><img className="facebook-logo" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
