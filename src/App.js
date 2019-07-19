import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from "./StaticLinks/AboutUs.js";
import { Switch } from "react-router";
import Landing from "./Landing.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/AboutUs" component={AboutUs} />
        </Router>
      </div>
    );
  }
}

export default App;
