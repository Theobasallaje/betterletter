import React, { Component } from "react";
import { connect } from "react-redux";
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
import Fab from "./../Fab/Fab";
import "./Home.scss";
import "animate.css";
import { Fab as TinyFab, Action } from "react-tiny-fab";
// import { SpeedDial, BubbleList, BubbleListItem } from "react-speed-dial";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ShareIcon from "@material-ui/icons/Share";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import EditIcon from "@material-ui/icons/Edit";
import PrintIcon from "@material-ui/icons/Print";
class Home extends Component {
  state = {
    homeContainerClass: "",
    copyConfirmationClass: "copyConfirmation",
    showCopyConfrimation: false,
  };

  componentDidMount() {
    // if (!this.props.placeHolder) alert("Test!");
    window.onbeforeunload = function () {
      // TODO: Figure out how to change the message on the alert
      // ? Can we change the placeholder back to true here?
      // ? For when launching from homescreen app - back on mobile exits?
      return "Data will be lost if you leave the page, are you sure?";
    };
  }

  componentWillUnmount() {
    // document.getElementById('homeContainer').className = 'animate__animated animate__bounceOutLeft';
  }

  handlePlaceHolder = () => {
    console.log("handlePlaceHolder Ran!");
    this.props.handlePlaceHolder(false);
    this.props.handleFabIcon("share");
    this.props.toggleDesktopShareSheet(false);
    this.props.showShareButton(true);
  };

  handleHomeAnimation = (className) => {
    this.setState({
      homeContainerClass: className,
    });
    console.log("Inisde handleHomeExit!");
  };

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
        onClick={this.handlePlaceHolder}
      >
        {/* //! adding animation here made the fab have unexpected behavior, not coming up with keyboard on Android */}
        {!this.props.isMobile && this.state.showCopyConfrimation && (
          <div className="copyConfirmationContainer">
            <div className={this.state.copyConfirmationClass}>Copied!</div>
          </div>
        )}
        <div className="editorDiv">
          <TextEditor handleHomeAnimation={this.handleHomeAnimation} />
        </div>
        {this.props.placeHolder && (
          <div
            className="placeholderContainer"
            // onClick={this.handlePlaceHolder}
          >
            {/* <img className="placeholder" src={placeholder} alt="placeholder" /> */}
            {/* <img className="placeholder" src={placeholderSmall} alt="placeholder" /> */}
            <img
              className="placeholder animate__animated animate__rubberBand"
              src={
                this.props.isMobile ? placeholderLowerCase : placeholderDesktop
              }
              alt="placeholder"
            />
          </div>
        )}
        <Fab
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
  handlePlaceHolder,
  showShareButton,
  toggleDesktopShareSheet,
})(Home);
