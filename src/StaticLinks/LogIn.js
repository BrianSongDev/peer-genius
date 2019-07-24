import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logInStyles from "./Login.css";
class LogIn extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Link className="item" id="logo1" to="/">
          PEER<span id="bold">GENIUS</span>
        </Link>
        <span className="item1" id="rectangle">
          <h1 id="bigText">We're happy to see you again!</h1>
          <h1 id="smallText">
            By logging into Peer Genius, you agree to our Terms of Use and
            Privacy Policy.
          </h1>
        </span>
        <span id="rectangle1">
          <h1 id="emailField">Email</h1>
          <input type="text" id="inputField" />
          <h1 id="emailField" style={{ top: "160px" }}>
            Password
          </h1>
          <input type="password" id="inputField" style={{ top: "202px" }} />
          <h1 id="forgotPassword">Forgot your password?</h1>
        </span>
      </div>
    );
  }
}

export default LogIn;
