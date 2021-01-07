import "./App.css";
// import EditorJS from '@editorjs/editorjs';
import React from "react";
import Output from "editorjs-react-renderer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMail from "./components/CreateMail/CreateMail";
import SendMail from "./components/SendMail/SendMail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  // const [data,setData] = React.useState()
  //
  
  //   setData(savedData);
  // }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/send">
            <Navbar />
            <SendMail />
          </Route>
          <Route path="/create-mail">
            <Navbar />
            <CreateMail />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>

         
      </div>
    </Router>
  );
}

export default App;
