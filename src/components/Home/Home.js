import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import Email from "./appLogo.png";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  let history = useHistory();
  const createMail = () => {
    if(true){
      let id = uuidv4();
      history.push(`/${id}`); 
    }
    else{
      alert("You need to Login before using this feature.")
      history.push("/login")
    }
    
  };
  return (
    <div className="home">
      <img className="image" src={Email} />
      <h2 className="home-header">It starts with an Email.</h2>
      <h4 className="header-desc">
        Whether it is a startup or well established business, it takes an email
        to grow your business
      </h4>
      <h4 className="header-desc">
        Email help a business to know their audience. So what's stopping you!!
      </h4>
      <h4 className="header-desc">
        Use our email-marketing platform for absolutely free and grow your
        business.
      </h4>
      <button className="home-button" onClick={createMail}>
        Create your email
      </button>
    </div>
  );
}

export default Home;
