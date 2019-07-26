import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      currentChoice: ""
    };
    this.handleConsciousness = this.handleConsciousness.bind(this);
    this.handleShade = this.handleShade.bind(this);
    // this.disableDiv1AndUnlockDiv2 = this.disableDiv1AndUnlockDiv2.bind(this);
    // this.disableDiv2 = this.disableDiv2.bind(this);
    // this.disableDiv3 = this.disableDiv3.bind(this);
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
  handleShade(a) {
    const b = a.target.className;
    this.setState({ buttonClicked: !this.state.buttonClicked });
    // if (this.state.buttonClicked == )
    this.setState({ currentChoice: b });
  }
  // disableDiv2() {
  //   const c = document
  //     .getElementById("activatedCard2")
  //     .getElementsByTagName("input");
  //   let i;
  //   for (i = 0; i < c.length; i++) {
  //     c[i].disabled = true;
  //   }
  // }
  // disableDiv3() {
  //   const c = document
  //     .getElementById("activatedCard3")
  //     .getElementsByTagName("input");
  //   let i;
  //   for (i = 0; i < c.length; i++) {
  //     c[i].disabled = true;
  //   }
  // }
  // disableDiv1AndUnlockDiv2() {
  //   if (
  //     document.getElementById("signUpText").value != "" &&
  //     document.getElementById("signUpText1").value != "" &&
  //     document.getElementById("signUpText2").value != "" &&
  //     document.getElementById("pass").value != ""
  //   ) {
  //     const c = document
  //       .getElementById("activatedCard1")
  //       .getElementsByTagName("input");
  //     let i;
  //     for (i = 0; i < c.length; i++) {
  //       c[i].disabled = true;
  //     }
  //     const d = document
  //       .getElementById("activatedCard1")
  //       .getElementsByTagName("button");
  //     let k;
  //     for (k = 0; k < d.length; k++) {
  //       d[k].disabled = true;
  //     }
  //     // Unlock Div2
  //     const e = document
  //       .getElementById("activatedCard2")
  //       .getElementsByTagName("input");
  //     let p;
  //     for (p = 0; p < e.length; p++) {
  //       e[p].disabled = false;
  //     }
  //   } else {
  //     alert("Please fill in all the fields before moving on.");
  //   }
  // }
  render() {
    return (
      <div>
        {/* {this.disableDiv2}
        {this.disableDiv3} */}
        <Link className="item" id="logo1" to="/">
          PEER<span id="bold">GENIUS</span>
        </Link>
        <div id="signUpWrap" className="item">
          <div id="activatedCard1">
            <span id="stepText">1. Create an account</span>
            <span id="descriptionLevel1">Your email</span>
            <input
              id="signUpText"
              type="email"
              pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
              style={{ top: "156px" }}
              onChange={this.handleConsciousness}
            />
            <span id="descriptionLevel2">First name</span>
            <input
              id="signUpText1"
              type="text"
              style={{ top: "239px", width: "132px" }}
              onChange={this.handleConsciousness}
            />
            <span id="descriptionLevel2" style={{ left: "184px" }}>
              Last name
            </span>
            <input
              id="signUpText2"
              type="text"
              style={{ left: "184px", top: "239px", width: "132px" }}
              onChange={this.handleConsciousness}
            />
            <span id="descriptionLevel3">Create a password</span>
            <input
              id="pass"
              type="password"
              style={{ top: "322px", width: "280px" }}
              onChange={this.handleConsciousness}
            />
            <h1
              id="signUpNextButton"
              style={{ cursor: "pointer" }}
              // onClick={this.disableDiv1AndUnlockDiv2}
            >
              <span id="loginlink" style={{ fontWeight: "normal" }}>
                Next
              </span>
            </h1>
          </div>

          <div id="activatedCard2">
            <span id="stepText">2. Tell us about yourself</span>
            <span id="descriptionLevel1" style={{ width: "227px" }}>
              I want to join Peer Genius as a(n)
            </span>
            <span id="selector">
              <input
                type="radio"
                name="selectorSet"
                style={{
                  width: "91.34px",
                  height: "31px",
                  textAlign: "center"
                }}
              />
              <label
                for="selectorSet"
                id="buttons"
                style={{
                  display: "inline-block",
                  lineHeight: "31px",
                  textAlign: "center",
                  color: "blue",
                  width: "91.34px"
                }}
              >
                Newbie
              </label>
              <span
                id="buttons"
                type="radio"
                name="selectorSet"
                className="unique1"
                style={{
                  cursor: "pointer",
                  left: "91.34px",
                  borderRadius: "0"
                }}
                onClick={this.handleShade}
              >
                <span
                  style={{
                    textAlign: "center",
                    color: "blue",
                    width: "91.34px"
                  }}
                >
                  Guru
                </span>
              </span>
              <span
                id="buttons"
                className="unique2"
                style={{
                  cursor: "pointer",
                  left: "182.68px",
                  borderRadius: "0 3.8px 3.8px 0"
                }}
                onClick={this.handleShade}
              >
                <span
                  style={{
                    textAlign: "center",
                    color: "blue",
                    width: "91.34px"
                  }}
                >
                  Admin
                </span>
              </span>
            </span>

            <span id="descriptionLevel2">What school do you attend?</span>
            <input
              id="signUpText3"
              type="text"
              style={{ top: "245px" }}
              onChange={this.handleConsciousness}
            />
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
