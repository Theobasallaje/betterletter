import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  handleFabIcon,
  showShareButton,
  handleTextDetection,
} from "./../../actions";
import Button from "@mui/material/Button";
import "./About.scss";
import "animate.css";
import tangerineLogo from "./../../images/tdraft_logo.png";

// function About(props) {
function About({
  handleFabIcon,
  showShareButton,
  handleTextDetection,
  hasText,
}) {
  useEffect(() => {
    handleFabIcon("back");
    showShareButton(false);
    hasText && handleTextDetection(false);
  }, [handleFabIcon, showShareButton]); // dependencies

  return (
    <>
      <div className="aboutContainer">
        <div className="aboutContent">
          <h2 className="aboutHeader">Features</h2>
          <ul className="featuresList">
            <li>Type distraction free</li>
            <li>Move your text to other apps</li>
            <li>Optimized for Mobile</li>
          </ul>
          <h2 className="aboutHeader">About</h2>
          <p className="aboutParagraph">
            tdraft.io is a product of IJNA Design based out of Dallas, TX. You
            can find the source code for this project
            <a
              href="https://github.com/Theobasallaje/betterletter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here
            </a>
            , and you can find our privacy policy
            <a href="/privacy" rel="noopener noreferrer">
              {" "}
              here
            </a>
            .
          </p>
          <h2 className="aboutHeader">Contact</h2>
          <p className="aboutParagraph">
            If you have any questions or feedback, please reach out to us using
            the following email address:
          </p>
          <a
            href="mailto:jbasallaje@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jbasallaje@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  hasText: state.textEditor.hasText,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  showShareButton,
  handleTextDetection,
})(About);
