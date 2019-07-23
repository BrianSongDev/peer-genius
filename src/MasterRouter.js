import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Landing from "./Landing.js";
import LogIn from "./StaticLinks/LogIn.js";
import AboutUs from "./StaticLinks/AboutUs.js";
import SignUp from "./StaticLinks/SignUp.js";
import PrivacyToS from "./StaticLinks/PrivacyToS.js";

export default class MasterRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/PrivacyToS" component={PrivacyToS} />
        </Switch>
      </Router>
    );
  }
}
