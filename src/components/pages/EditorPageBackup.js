import React, { Component, useEffect, useCallback, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { useCallbackPrompt } from '../../hooks/useCallbackPrompt'
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import TextEditor from "./../TextEditor";
import {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  toggleDesktopShareSheet,
} from "./../../actions";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import placeholder from "./../../images/tdraft_placeholder.png";
// import placeholderSmall from "./../../images/tdraft_placeholder_small.png";
import placeholderLowerCase from "./../../images/tdraft_placeholder_lower_case.png";
import placeholderDesktop from "./../../images/tdraft_desktop_placeholder_lower_case.png";
import FabWrapper from "../FabWrapper/FabWrapper";
import "./EditorPage.scss";
import "animate.css";
class EditorPage extends Component {
  state = {
    homeContainerClass: "",
    copyConfirmationClass: "copyConfirmation",
    showCopyConfrimation: false,
  };

  beforeUnloadListener = (event) => {
    // event.preventDefault();
    console.log("event", event);
    // ! return null if no content in editor to have this not show up
    return (event.returnValue = "Are you sure you want to exit?");
    // return null;
  };

  componentDidMount() {
    // if (!this.props.placeHolder) alert("Test!");
    window.addEventListener("beforeunload", this.beforeUnloadListener);
  }

  componentWillUnmount() {
    // window.location.reload();
    window.removeEventListener("beforeunload", this.beforeUnloadListener);
    if (this.props.editorState !== '') {
      let confirmation = window.confirm("Changes you made may not be saved.");
      console.log(!confirmation);
      !confirmation && this.props.history.block(()=>{});
    }
    // <Prompt
    //   when={this.props.editorState !== ''}
    //   message="Are you sure you want to leave?"
    // />
    // !https://stackoverflow.com/questions/37145404/how-to-prevent-route-change-using-react-router
    // window.preventDefault();
  }

  handleCopyConfirmationAnimation = (classEnter, ClassExtit) => {
    this.setState({
      showCopyConfrimation: true,
      copyConfirmationClass: classEnter,
    });
    // TODO: Look into making this a promise.
    setTimeout(() => {
      this.setState({
        copyConfirmationClass: ClassExtit,
      });
    }, 1200);
    setTimeout(() => {
      this.setState({
        showCopyConfrimation: false,
      });
    }, 2200);
    console.log("Inisde handleHomeExit!");
  };

  handleKeyPressFocus = () => {
    if (!this.props.keyPress) {
      this.handleKeyPress(true);
    }
  };

  handleDismissShareSheet = () => {
    this.props.showDesktopShareSheet &&
      this.props.toggleDesktopShareSheet(false);
  };

  render() {
    return (
      <div
        className="editorPageContainer"
        onClick={this.handleDismissShareSheet}
      >
        {/* //! adding animation here made the fab have unexpected behavior, not coming up with keyboard on Android */}
        {!this.props.isMobile && this.state.showCopyConfrimation && (
          <div className="copyConfirmationContainer">
            <div className={this.state.copyConfirmationClass}>Copied!</div>
          </div>
        )}
        <Navbar
          handleCopyConfirmationAnimation={this.handleCopyConfirmationAnimation}
        />
        <div className="editorDiv">
          {/* //! Is this prop needed, doesnt seem to be used in the TextEditor component */}
          <TextEditor handleHomeAnimation={this.handleHomeAnimation} />
        </div>
        {/* {!this.props.isMobile && <FabWrapper />} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  isMobile: state.placeHolder.isMobile,
  showDesktopShareSheet: state.fab.showDesktopShareSheet,
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  showShareButton,
  toggleDesktopShareSheet,
})(EditorPage);
