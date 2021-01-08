import "./App.css";
// import EditorJS from '@editorjs/editorjs';
import React from "react";
import Output from "editorjs-react-renderer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CreateMail from "./components/CreateMail/CreateMail";
import SendMail from "./components/SendMail/SendMail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";

function App() {
  // const [data,setData] = React.useState()
  //

  //   setData(savedData);
  // }
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    let unsubscribe;
    unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/send">
            {user != null ? <Navbar email={user.email} /> : <Navbar />}
            <SendMail />
          </Route>

          <Route path="/create-mail">
            {user != null ? <Navbar email={user.email} /> : <Navbar />}

            <CreateMail />
          </Route>

          {/* <Redirect to="/login" /> */}

          <Route path="/send-mail">
            <SendMail />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {user != null ? <Navbar email={user.email} /> : <Navbar />}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
