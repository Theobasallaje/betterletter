import React, { Component } from "react";
import { connect } from "react-redux";
import TextEditor from "./../TextEditor";
import Fab from "./../Fab/Fab";

class Home extends Component {
  render() {
    return (
      <>
        <TextEditor />
        <Fab />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
