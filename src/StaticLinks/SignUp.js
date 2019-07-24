import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleConsciousness = this.handleConsciousness.bind(this);
  }
  handleConsciousness(a) {
    const b = a.target.id;
    if (document.getElementById(b).value != "") {
      document.getElementById(b).style.border = "1px solid #406ddd";
    } else {
      document.getElementById(b).style.border =
        "0.5px solid rgba(105, 105, 105, 0.5)";
    }
  }
  render() {
    return (
      <div>
        <Link className="item" id="logo1" to="/">
          PEER<span id="bold">GENIUS</span>
        </Link>
        <div id="signUpWrap" className="item">
          <div id="activatedCard1">
            <span id="stepText">1. Create an account</span>
            <span id="descriptionLevel1">Your email</span>
            <input
              id="signUpText"
              style={{ top: "156px" }}
              onChange={this.handleConsciousness}
            />
            <span id="descriptionLevel2">First name</span>
            <span id="descriptionLevel2" style={{ left: "184px" }}>
              Last name
            </span>
            <span id="descriptionLevel3">Create a password</span>
          </div>
          <div id="activatedCard2">
            <span id="stepText">2. Tell us about yourself</span>
            <span id="descriptionLevel1" style={{ width: "227px" }}>
              I want to join Peer Genius as a(n)
            </span>
            <span id="descriptionLevel2">What school do you attend?</span>
            <span id="descriptionLevel3">What is your grade level?</span>
          </div>
          <div id="activatedCard3">
            <span id="stepText">3. Customize your learning</span>
            <span id="descriptionLevel1">
              What subjects do you need help with?
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
