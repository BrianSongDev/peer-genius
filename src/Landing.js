import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from "./StaticLinks/AboutUs.js";
class Landing extends React.Component {
  render() {
    return (
      <div id="bigbody">
        {/* MOBILE INTEGRATION FOR SIZE CONSTRAINTS <div class="mobileShow">
        </div> */}
        <div className="header">
          <h1 id="logo">
            <a href="/">
              PEER<span id="bold">GENIUS</span>
            </a>
          </h1>
          <p
            id="hb"
            style={{
              width: "76px",
              height: "18px",
              left: "85%",
              top: "42px"
            }}
          >
            <Router>
              <Link to="/AboutUs">About Us</Link>
              <Route path="/AboutUs" component={AboutUs} />
            </Router>
          </p>
          <p
            id="hb"
            style={{
              width: "71px",
              height: "18px",
              left: "90%",
              top: "42px"
            }}
          >
            Sign Up
          </p>
          <p id="login">
            {/* <Link to="/DynamicLinks/LogIn.js"> */}
            LOG IN
            {/* </Link> */}
          </p>
        </div>
        <div className="body">
          <h1 id="main">Get the tutoring help you need, for free.</h1>
          <p id="main2">
            We’re on a mission to connect students like you with great tutors at
            zero cost - because your education should never be limited by a
            price tag.
          </p>
          <p id="button">
            SIGN UP <img id="arrow" src={require("../arrow.png")} />
          </p>
          <p id="gurutext">
            Have skills you would like to share?{" "}
            <span id="bold">Become a Guru</span>
          </p>
          <img
            id="cgi-person"
            className="item"
            src={require("../cgi-person.png")}
          />
        </div>
        <div className="body1">
          <h1 id="center">How Peer Genius works</h1>
          <img
            id="cgi-book"
            className="item"
            src={require("../cgi-book.png")}
          />
          <img
            id="cgi-paper"
            className="item"
            src={require("../cgi-paper.png")}
          />
          <img
            id="cgi-cube"
            className="item"
            src={require("../cgi-cube.png")}
          />
          <h3
            id="cgi-book"
            className="item"
            style={{ left: "20%", top: "1060px" }}
          >
            Newbies get high quality tutoring for free
          </h3>
          <h3
            id="cgi-paper"
            className="item"
            style={{ left: "50%", top: "1060px", width: "230px" }}
          >
            Gurus get community service hours for their time
          </h3>
          <h3
            id="cgi-cube"
            className="item"
            style={{ left: "80%", top: "1060px", width: "230px" }}
          >
            Students connect with students online
          </h3>
          <p
            id="cgi-book"
            className="paragraph"
            style={{ left: "20%", top: "1140px", width: "265px" }}
          >
            Although part of the learning experience is in the struggle, it
            shouldn’t be a financial one. Newbies have the opportunity to
            receive 1:1 tutoring for free.
          </p>
          <p
            id="cgi-paper"
            className="paragraph"
            style={{ left: "50%", top: "1140px", width: "242px" }}
          >
            Help knock out the community service hours your school requires and
            get the chance to earn the PVSA award. Learn more about PVSA here.
          </p>
          <p
            id="cgi-paper"
            className="paragraph"
            style={{ left: "80%", top: "1140px", width: "246px" }}
          >
            Beyond an educational platform, Peer Genius is a social platform - a
            place where students can meet other students from all around the
            world.
          </p>

          <h1 id="blueheader" style={{ left: "21%", top: "1364px" }}>
            NEWBIES
          </h1>
          <h2 id="bluequote" style={{ left: "21%", top: "1413px" }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut."
          </h2>
          <h2 id="blueperson" style={{ left: "21%", top: "1610px" }}>
            GEORGIA S. / HIGH SCHOOL SOPHOMORE / IRVINE, CA
          </h2>
          <p id="bluedesc" style={{ left: "21%", top: "1640px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut.
          </p>
          <p id="bluebutton" style={{ left: "21%" }}>
            Get started as a newbie
          </p>
          <img id="cgi-study" src={require("../cgi-study.png")} />

          <h1 id="blueheader" style={{ left: "55%", top: "1780px" }}>
            GURUS
          </h1>
          <h2 id="bluequote" style={{ left: "55%", top: "1825px" }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut."
          </h2>
          <h2 id="blueperson" style={{ left: "55%", top: "2022px" }}>
            GEORGIA S. / HIGH SCHOOL SOPHOMORE / IRVINE, CA
          </h2>
          <p id="bluedesc" style={{ left: "55%", top: "2052px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut.
          </p>
          <p
            id="bluebutton"
            style={{ left: "55%", top: "2132px", width: "199px" }}
          >
            Get started as a guru
          </p>
          <img id="cgi-teach" src={require("../cgi-teach.png")} />

          <h1 id="center" style={{ top: "2360px" }}>
            Join Peer Genius today
          </h1>
          <p id="bluebutton" className="item" style={{ top: "2460px" }}>
            Newbies
          </p>
          <p id="bluebutton" className="item" style={{ top: "2505px" }}>
            Gurus
          </p>
          <p id="bluebutton" className="item" style={{ top: "2550px" }}>
            Help our cause
          </p>
        </div>
        <div className="footer">
          <p
            id="logo"
            style={{
              fontSize: "14px",
              top: "40px",
              left: "24%",
              color: "black"
            }}
          >
            PEER
            <span id="bold" style={{ color: "black" }}>
              GENIUS
            </span>
          </p>
          <h5
            id="bottomhead"
            className="item"
            style={{ left: "38%", paddingTop: "3px" }}
          >
            Peer Genius
          </h5>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", left: "38%", top: "85px" }}
          >
            About
          </p>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", left: "38%", top: "115px" }}
          >
            Contact Us
          </p>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", left: "38%", top: "145px" }}
          >
            Help
          </p>
          <h5
            id="bottomhead"
            className="item"
            style={{
              paddingTop: "3px",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            Involvement
          </h5>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", top: "85px" }}
          >
            Become a newbie
          </p>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", top: "115px" }}
          >
            Become a guru
          </p>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", top: "145px" }}
          >
            Become an admin
          </p>
          <h5
            id="bottomhead"
            className="item"
            style={{ left: "62%", paddingTop: "3px" }}
          >
            Support
          </h5>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", left: "62%", top: "85px" }}
          >
            Privacy Policy
          </p>
          <p
            id="bottomhead"
            className="item"
            style={{ fontWeight: "normal", left: "62%", top: "115px" }}
          >
            Terms of Service
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
