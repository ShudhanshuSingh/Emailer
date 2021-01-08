import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Home.css"

function Home() {
    let history =  useHistory();
    const createMail = () =>{

       history.push("/create-mail");
    }
    return (
        <div className="home">
            <h2 className="home-header">It starts with an Email.</h2>
            <h4 className="header-desc">Whether it is a startup or well established business, it takes an email to grow your business</h4>
            <h4 className="header-desc">Email help a business to know their audience. So what's stopping you!!</h4>
            <h4 className="header-desc">Use our email-marketing platform for absolutely free and grow your business.</h4>
            <button className="home-button" onClick={createMail}>Create your email</button>
        </div>
    )
}

export default Home
