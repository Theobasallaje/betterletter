import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { detectMobile } from "./actions/index";
import Home from "./components/pages/Home";
import EditorPage from "./components/pages/EditorPage";
import PrivacyPage from "./components/pages/PrivacyPage";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    if (isMobile) {
      console.log(`isMobile: ${isMobile}`);
      this.props.detectMobile(true);
    }
  }

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" exact element={<EditorPage />} />
            <Route path="about" exact element={<Home />} />
            <Route path="privacy" exact element={<PrivacyPage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { detectMobile })(App);
