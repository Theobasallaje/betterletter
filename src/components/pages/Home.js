import React, { Component } from "react";
import { connect } from "react-redux";

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
class Home extends Component {
  state = {
    homeContainerClass: "",
    copyConfirmationClass: "copyConfirmation",
    showCopyConfrimation: false,
  };

  componentDidMount() {
  }

  handlePlaceHolder = () => {
    console.log("handlePlaceHolder Ran!");
    // this.props.handlePlaceHolder(false);
    // this.props.handleFabIcon("share");
    // this.props.toggleDesktopShareSheet(false);
    // this.props.showShareButton(true);
    this.props.history.push("/editor");
  };

  handleHomeAnimation = (className) => {
    this.setState({
      homeContainerClass: className,
    });
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
        {this.props.placeHolder && (
          <div
            className="placeholderContainer"
            //! Why is this not triggering??
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
        <Fab />
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
