import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleFabIcon, showShareButton } from "./../../actions";
import Button from "@mui/material/Button";
import "./About.scss";
import "animate.css";
import tangerineLogo from "./../../images/tdraft_logo.png";

// function About(props) {
function About({ handleFabIcon, showShareButton }) {
  useEffect(() => {
    handleFabIcon("back");
    showShareButton(false);
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
          <h2 className="aboutHeader">Privacy</h2>
          <p className="aboutParagraph">
            tdraft.io does not collect
            <i>
              <b> any </b>
            </i>
            of your data. All of our code is open source and available
            <a href="https://github.com/Theobasallaje/betterletter" target="_blank" rel="noopener noreferrer"> here</a>
          </p>
          <h2 className="aboutHeader">Contact</h2>
          <p className="aboutParagraph">
            tdraft.io is developed by IJNA. If you have any questions or
            feedback, please reach out to us.
          </p>
          {/* <div>
              <p className="aboutParagraph">
                tdraft is a simple, mobile-optimized text editor for the web.
              </p>
              <p className="aboutParagraph">
                Type distraction free and then move your text to other apps.
              </p>
            </div> */}
          <a href="mailto:jonathanbasallaje1995@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              sx={{
                color: "black",
                textAlign: "left",
                borderColor: "black",
                marginTop: "32px",
                marginBottom: "8px",
                marginRight: "8px",
                borderWidth: "2px",
                "&:hover": { borderWidth: "2px", borderColor: "black", background: "#FDDAA5" },
              }}
            >
              <span className="emailButton">Email</span>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  handleFabIcon,
  showShareButton,
})(About);
