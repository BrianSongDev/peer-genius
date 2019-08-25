import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    };
  }
  checkIfBlank = () => {
    if (
      document.getElementById("text").value != "" &&
      document.getElementById("password").value != ""
    ) {
      this.setState({ isDisabled: false });
      document.getElementById("formSubmission").style.background = "#406ddd";
    } else {
      this.setState({ isDisabled: true });
      document.getElementById("formSubmission").style.background =
        "rgba(64, 109, 221, 0.3)";
    }
  }
  handleSubmit = () => { // Link to backend here for logging in
  }
  render() {
    return (
      <div id="wrapper">
        <Link className="item" id="logo1" to="/">
          PEER<span id="bold">GENIUS</span>
        </Link>
        <span className="item1" id="rectangle">
          <h1 id="bigText">We're happy to see you again!</h1>
          <h1 id="smallText">
            By logging into Peer Genius, you agree to our{" "}
            <Link to="/PrivacyToS" target="_blank">
              <span style={{ textDecoration: "underline", color: "white" }}>
                Terms of Use
              </span>
            </Link>{" "}
            and{" "}
            <Link to="/PrivacyToS" target="_blank">
              <span style={{ textDecoration: "underline", color: "white" }}>
                Privacy Policy
              </span>
            </Link>
            .
          </h1>
        </span>
        <span id="rectangle1">
          <h1 id="emailField">Email</h1>
          <input type="email" id="text" onChange={this.checkIfBlank} />
          <h1 id="emailField" style={{ top: "140px" }}>
            Password
          </h1>
          <input type="password" id="password" onChange={this.checkIfBlank} />
          <h1 id="forgotPassword">Forgot your password?</h1>
          <button
            id="formSubmission"
            disabled={this.state.isDisabled}
            onClick={this.handleSubmit}
          >
            Log me in!
          </button>
          <Link to="/SignUp">
            <h1 id="noAccount">No account? Sign up here</h1>
          </Link>
        </span>
      </div>
    );
  }
}

export default LogIn;
