import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from '../Navbar/Navbar'
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
import SpeedDial from '../SpeedDial/SpeedDial'
import "./EditorPage.scss";
import "animate.css";
class EditorPage extends Component {
  state = {
    homeContainerClass: "",
    copyConfirmationClass: "copyConfirmation",
    showCopyConfrimation: false,
  };

  componentDidMount() {
    // if (!this.props.placeHolder) alert("Test!");
    window.onbeforeunload = function () {
      return "Data will be lost if you leave the page, are you sure?";
    };
  }

  componentWillUnmount() {
    window.location.reload();
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
      this.handleKeyPress(true)
    }
  }

  render() {
    return (
      <div
        id="homeContainer"
        className={this.state.homeContainerClass}
      >
        {/* //! adding animation here made the fab have unexpected behavior, not coming up with keyboard on Android */}
        {!this.props.isMobile && this.state.showCopyConfrimation && (
          <div className="copyConfirmationContainer">
            <div className={this.state.copyConfirmationClass}>Copied!</div>
          </div>
        )}
        {/* <Navbar /> */}
        <div className="editorDiv">
          {/* //! Is this prop needed, doesnt seem to be used in the TextEditor component */}
          <TextEditor handleHomeAnimation={this.handleHomeAnimation} /> 
        </div>
        {/* <img alt='squirtle' src='https://image.pngaaa.com/218/4268218-middle.png' className="squirtle" /> */}
        {!this.props.isMobile && <FabWrapper />}
        {/* //TODO: Implement for Desktop? */}
        {/* <SpeedDial /> */}
        <FabWrapper
          className="fabWrapper"
          handleCopyConfirmationAnimation={this.handleCopyConfirmationAnimation}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  showShareButton,
  toggleDesktopShareSheet,
})(EditorPage);
