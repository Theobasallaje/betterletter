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
    console.log(this.history);
    if (!this.props.placeHolder) this.props.handlePlaceHolder(true);
    window.addEventListener("keydown", this.handleKeyPressFocus);
    return () => {
      window.removeEventListener("keydown", this.handleKeyPressFocus);
    };
  }

  showEditor = () => {
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
        onClick={this.showEditor}
      >
        {this.props.placeHolder && (
          <div
            className="placeholderContainer"
          //! Why is this not triggering??
          // onClick={this.handlePlaceHolder} 
          >
            {/* <img className="placeholder" src={placeholder} alt="placeholder" /> */}
            {/* <img className="placeholder" src={placeholderSmall} alt="placeholder" /> */}
            {/* //TODO: make h1 */}
            <p className="title animate__animated animate__fadeIn">tdraft.io</p>
            <img
              className="placeholder animate__animated animate__fadeIn"
              src={
                this.props.isMobile ? placeholderLowerCase : placeholderDesktop
              }
              alt="tdraft logo"
            />
            <br /><br />
            <p className="instructions animate__animated animate__fadeIn">{this.props.isMobile ? 'Tap anywhere to start typing' : 'Click anywhere or press any key'}</p>
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
