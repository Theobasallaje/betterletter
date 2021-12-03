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
import placeholderLowerCase from "./../../images/tdraft_logo.png";
import placeholderDesktop from "./../../images/tdraft_logo.png";
import FabWrapper from "../FabWrapper/FabWrapper";
import "./Home.scss";
import "animate.css";
class Home extends Component {
  state = {
    homeContainerClass: "",
    copyConfirmationClass: "copyConfirmation",
    showCopyConfrimation: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPressFocus);
    return () => {
      window.removeEventListener("keydown", this.handleKeyPressFocus);
    };
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
    this.props.history.push("/editor");
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
            className="placeholderContainer animate__animated animate__rubberBand"
          //! Why is this not triggering??
          // onClick={this.handlePlaceHolder} 
          >
            {/* <img className="placeholder" src={placeholder} alt="placeholder" /> */}
            {/* <img className="placeholder" src={placeholderSmall} alt="placeholder" /> */}
            {/* //TODO: make h1 */}
            <p className="title">tdraft.io</p>
            <img
              className="placeholder"
              src={
                this.props.isMobile ? placeholderLowerCase : placeholderDesktop
              }
              alt="placeholder"
            />
            <br /><br />
            <p className="instructions">{this.props.isMobile ? 'Tap anywhere to start typing' : 'Click anywhere or press any key'}</p>
            <hr />
          </div>
        )}
        <FabWrapper />
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
