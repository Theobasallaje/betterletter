import React, { Component } from "react";
import { connect } from "react-redux";
import TextEditor from "./../TextEditor";
import { handlePlaceHolder } from './../../actions'
// import placeholder from "./../../images/tdraft_placeholder.png";
// import placeholderSmall from "./../../images/tdraft_placeholder_small.png";
import placeholderLowerCase from "./../../images/tdraft_placeholder_lower_case.png";
import Fab from "./../Fab/Fab";
import "./Home.scss";

class Home extends Component {

  handlePlaceHolder = () => {
    this.props.handlePlaceHolder(false);
  }

  render() {
    return (
      <>
        <TextEditor />
        {this.props.placeHolder && (
          <div className="placeholderContainer" onClick={this.handlePlaceHolder}>
            {/* <img className="placeholder" src={placeholder} alt="placeholder" /> */}
            {/* <img className="placeholder" src={placeholderSmall} alt="placeholder" /> */}
            <img className="placeholder" src={placeholderLowerCase} alt="placeholder" />
          </div>
        )}
        <Fab />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorRef: state.textEditor.ref,
});

export default connect(mapStateToProps, {handlePlaceHolder})(Home);
