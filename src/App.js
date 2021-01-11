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
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [data,setData] = React.useState()
  //

  //   setData(savedData);
  // }
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  React.useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(
          login({
          email:authUser.email,
          uid:authUser.uid
          })
        );
        console.log(authUser)
      }
      else{
        dispatch(logout());
      }
    });
    // return () => {
    //   unsubscribe();
    // };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/send">
            {user != null ? <Navbar email={""} /> : <Navbar />}
            <SendMail />
          </Route>
          <Route path="/send-mail">
            <SendMail />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/:docId">
            {user != null ? <Navbar email={""} /> : <Navbar />}

            <CreateMail />
          </Route>

          {/* <Redirect to="/login" /> */}

          
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
