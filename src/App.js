import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(App);
