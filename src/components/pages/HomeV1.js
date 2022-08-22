import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  toggleDesktopShareSheet,
  handleTextDetection,
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
const HomeV1 = (props) => {
  // const history = useHistory();
  const history = useNavigate();
  const [homeContainerClass, setHomeContainerClass] = useState("");
  const [copyConfirmationClass, setCopyConfirmationClass] = useState("copyConfirmation");
  const [showCopyConfrimation, setShowCopyConfirmation] = useState(false);

  // state = {
  //   homeContainerClass: "",
  //   copyConfirmationClass: "copyConfirmation",
  //   showCopyConfrimation: false,
  // };

  useEffect(() => {
    // console.log(this.history);
    if (!props.placeHolder) props.handlePlaceHolder(true);
    if (props.hasText) props.handleTextDetection(false);
    window.addEventListener("keydown", handleKeyPressFocus);
    return () => {
      window.removeEventListener("keydown", handleKeyPressFocus);
    };
  }, []);

  const showEditor = () => {
    history("/editor");
    // history("../editor", { replace: true });
  };

  // const handleHomeAnimation = (className) => {
  //   this.setState({
  //     homeContainerClass: className,
  //   });
  //   console.log("Inisde handleHomeExit!");
  // };

  const handleKeyPressFocus = () => {
    history("/editor");
    // history("../editor", { replace: true });
  };

  return (
    <div
      id="homeContainer"
      className={homeContainerClass}
      onClick={showEditor}
    >
      {props.placeHolder && (
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
              props.isMobile ? placeholderLowerCase : placeholderDesktop
            }
            alt="tdraft logo"
          />
          <br />
          <br />
          <p className="instructions animate__animated animate__fadeIn">
            {props.isMobile
              ? "Tap anywhere to start typing"
              : "Click anywhere or press any key"}
          </p>
          <hr />
        </div>
      )}
      <FabWrapper />
    </div>
  );
};

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  isMobile: state.placeHolder.isMobile,
  hasText: state.textEditor.hasText,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  toggleDesktopShareSheet,
  handleTextDetection,
})(HomeV1);
