import React, { Component } from "react";
import { connect } from "react-redux";
import TextEditor from "./components/TextEditor";
import Fab from "./components/Fab/Fab";
import "./App.scss";

import { handlePlaceHolder } from "./actions";

class App extends Component {

  render() {
    return (
      <>
        <div>
          <TextEditor  />
        </div>
        <Fab />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {  })(App);