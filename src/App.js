import React, { Component } from "react";
import {isMobile} from 'react-device-detect';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { detectMobile } from './actions/index'
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import "./App.scss";

class App extends Component {

  componentDidMount() {
    if(isMobile) {
      console.log(`isMobile: ${isMobile}`)
      this.props.detectMobile(true);
    }
  }

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

export default connect(mapStateToProps, { detectMobile })(App);
