import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      isAdmin: false
    });
    this.handleConsciousness = this.handleConsciousness.bind(this);
    this.disableDiv1AndUnlockDiv2 = this.disableDiv1AndUnlockDiv2.bind(this);
    this.disableDiv2AndUnlockDiv3 = this.disableDiv2AndUnlockDiv3.bind(this);
    this.disableDiv2 = this.disableDiv2.bind(this);
    this.disableDiv3 = this.disableDiv3.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
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
  handleAdmin() {
    alert(
      "If you are signing up for an Admin, please fill out the next two fields with school 0000 and grade 6. Thank you for your cooperation."
    );
  }
  disableDiv2() {
    const c = document
      .getElementById("activatedCard2")
      .getElementsByTagName("input");
    let i;
    for (i = 0; i < c.length; i++) {
      c[i].disabled = true;
    }
    const d = document
      .getElementById("activatedCard2")
      .getElementsByTagName("h1");
    let k;
    for (k = 0; k < d.length; k++) {
      d[k].disabled = true;
    }
  }
  disableDiv3() {
    const c = document
      .getElementById("activatedCard3")
      .getElementsByTagName("input");
    let i;
    for (i = 0; i < c.length; i++) {
      c[i].disabled = true;
    }
    const d = document
      .getElementById("activatedCard2")
      .getElementsByTagName("h1");
    let k;
    for (k = 0; k < d.length; k++) {
      d[k].disabled = true;
    }
  }
  disableDiv1AndUnlockDiv2() {
    if (
      // Check if they are empty or not; if empty, send an alert reminding user to fill out everything
      document.getElementById("signUpText").value != "" &&
      document.getElementById("signUpText1").value != "" &&
      document.getElementById("signUpText2").value != "" &&
      document.getElementById("pass").value != ""
    ) {
      // Disable Div1
      const c = document
        .getElementById("activatedCard1")
        .getElementsByTagName("input");
      let i;
      for (i = 0; i < c.length; i++) {
        c[i].disabled = true;
      }
      const d = document
        .getElementById("activatedCard1")
        .getElementsByTagName("button");
      let k;
      for (k = 0; k < d.length; k++) {
        d[k].disabled = true;
      }
      // Unlock Div2
      const e = document
        .getElementById("activatedCard2")
        .getElementsByTagName("input");
      let p;
      for (p = 0; p < e.length; p++) {
        e[p].disabled = false;
      }
      // And lastly...focus on Div2 (change the background) and shade Div1
      document.getElementById("activatedCard1").style.background = "white";
      document.getElementById("activatedCard2").style.background =
        "rgba(240, 243, 249, 0.5)"; //This is our focused div background color.
      document.getElementById("activatedCard1").style.opacity = 0.6;
      document.getElementById("activatedCard2").style.opacity = 1;
    } else {
      alert("Please fill in all the fields before moving on.");
    }
  }
  disableDiv2AndUnlockDiv3() {
    let setChecked = document.querySelector(
      'input[name = "selectorSet"]:checked'
    );
    let set1Checked = document.querySelector(
      'input[name = "selectorSet1"]:checked'
    );
    if (
      // Check if they are empty or not; if empty, send an alert reminding user to fill out everything
      document.getElementById("signUpText3").value != "" &&
      setChecked != null &&
      set1Checked != null
    ) {
      // Disable Div2
      const c = document
        .getElementById("activatedCard2")
        .getElementsByTagName("input");
      let i;
      for (i = 0; i < c.length; i++) {
        c[i].disabled = true;
      }
      const d = document
        .getElementById("activatedCard2")
        .getElementsByTagName("button");
      let k;
      for (k = 0; k < d.length; k++) {
        d[k].disabled = true;
      }
      // Unlock Div3
      const e = document
        .getElementById("activatedCard3")
        .getElementsByTagName("input");
      let p;
      for (p = 0; p < e.length; p++) {
        e[p].disabled = false;
      }
      // And lastly...focus on Div2 (change the background) and shade Div1
      document.getElementById("activatedCard2").style.background = "white";
      document.getElementById("activatedCard3").style.background =
        "rgba(240, 243, 249, 0.5)"; //This is our focused div background color.
      document.getElementById("activatedCard2").style.opacity = 0.6;
      document.getElementById("activatedCard3").style.opacity = 1;
    } else {
      alert("Please fill in all the fields before moving on.");
    }
  }
  componentDidMount() {
    this.disableDiv2();
    this.disableDiv3();
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
            <span id="descriptionLevel1">
              Your email (you will verify this later)
            </span>
            <input
              id="signUpText"
              type="email"
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
              onClick={this.disableDiv1AndUnlockDiv2}
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
                id="buttons1"
                type="radio"
                name="selectorSet"
                style={{
                  width: "93px",
                  height: "31px",
                  textAlign: "center"
                }}
              />
              <label htmlFor="buttons1" style={{ left: "0px" }}>
                Newbie
              </label>
              <input id="buttons" type="radio" name="selectorSet" />
              <label
                htmlFor="buttons"
                style={{ left: "93px", width: "93px", borderRadius: "0" }}
              >
                Guru
              </label>
              <input id="buttons2" type="radio" name="selectorSet" />
              <label
                htmlFor="buttons2"
                style={{
                  left: "186px",
                  borderRadius: "0 3.8px 3.8px 0",
                  width: "91px"
                }}
                onClick={this.handleAdmin}
              >
                Admin
              </label>
            </span>

            <span id="descriptionLevel2">What school do you attend?</span>
            <input
              id="signUpText3"
              type="text"
              style={{ top: "245px" }}
              onChange={this.handleConsciousness}
            />
            <span id="descriptionLevel3">What is your grade level?</span>
            <span id="selector" style={{ top: "327px" }}>
              <input id="a1" type="radio" name="selectorSet1" />
              <label htmlFor="a1" style={{ left: "0px", width: "40px" }}>
                6
              </label>
              <input
                id="a2"
                type="radio"
                name="selectorSet1"
                style={{ left: "40px" }}
              />
              <label
                htmlFor="a2"
                style={{ left: "40px", width: "40px", borderRadius: "0" }}
              >
                7
              </label>
              <input id="a3" type="radio" name="selectorSet1" />
              <label
                htmlFor="a3"
                style={{
                  left: "80px",
                  borderRadius: "0",
                  width: "40px"
                }}
              >
                8
              </label>
              <input id="a4" type="radio" name="selectorSet1" />
              <label
                htmlFor="a4"
                style={{
                  left: "120px",
                  borderRadius: "0",
                  width: "40px"
                }}
              >
                9
              </label>
              <input id="a5" type="radio" name="selectorSet1" />
              <label
                htmlFor="a5"
                style={{
                  left: "160px",
                  borderRadius: "0",
                  width: "40px"
                }}
              >
                10
              </label>
              <input id="a6" type="radio" name="selectorSet1" />
              <label
                htmlFor="a6"
                style={{
                  left: "200px",
                  borderRadius: "0",
                  width: "40px"
                }}
              >
                11
              </label>
              <input id="a7" type="radio" name="selectorSet1" />
              <label
                htmlFor="a7"
                style={{
                  left: "240px",
                  borderRadius: "0 3.8px 3.8px 0",
                  width: "37px"
                }}
              >
                12
              </label>
            </span>
            <h1
              id="signUpNextButton"
              style={{ cursor: "pointer" }}
              onClick={this.disableDiv2AndUnlockDiv3}
            >
              <span id="loginlink" style={{ fontWeight: "normal" }}>
                Next
              </span>
            </h1>
          </div>
          <div id="activatedCard3">
            <span id="stepText">3. Customize your learning</span>
            <span id="descriptionLevel1">
              What subjects do you need help with?
            </span>
            <span id="subjectsneedhelpwith">Mathematics</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
