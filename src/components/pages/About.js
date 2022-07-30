import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleFabIcon, showShareButton } from "./../../actions";
import FabWapper from "../FabWrapper/FabWrapper";
import Button from "@mui/material/Button";
import "./About.scss";
import "animate.css";
import tangerineLogo from "./../../images/tdraft_logo.png";
import { EmailOutlined, LinkedIn, GitHub } from "@mui/icons-material";

// function About(props) {
function About({ handleFabIcon, showShareButton }) {
  useEffect(() => {
    handleFabIcon("back");
    showShareButton(false);
  }, [handleFabIcon, showShareButton]); // dependencies

  return (
    <>
      <div className="aboutContainer animate__animated animate__bounceInLeft">
        <div className="aboutContentContainer">
          <div className="aboutContent">
            <h2>Features</h2>
            <ul className="featuresList">
              <li>Type distraction free</li>
              <li>Move your text to other apps</li>
              <li>Optimized for Mobile</li>
            </ul>
            <h2>Privacy</h2>
            <p className="aboutParagraph">
              tdraft.io does not collect
              <i>
                <b> any </b>
              </i>
              of your data. All of our code is open source and available
              <a href="https://github.com/Theobasallaje/betterletter" target="_blank" rel="noopener noreferrer"> here</a>
            </p>
            <h2>Contact</h2>
            <p className="aboutParagraph">
              tdraft.io is developed by IJNA. If you have any questions or
              feedback, please reach out to us using the links below.
            </p>
            <br />
            <p>Thank you!</p>
            {/* <div>
              <p className="aboutParagraph">
                tdraft is a simple, mobile-optimized text editor for the web.
              </p>
              <p className="aboutParagraph">
                Type distraction free and then move your text to other apps.
              </p>
            </div> */}
            <div className="contactDiv">
              <a href="mailto:jonathanbasallaje1995@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    width: 100,
                    textAlign: "left",
                    borderRadius: "45px",
                    borderColor: "#FDDAA5",
                    marginBottom: "8px",
                    marginRight: "8px",
                    borderWidth: "2px",
                    "&:hover": { borderColor: "#FDDAA5", borderWidth: "2px", background: "white" },
                  }}
                >
                  <EmailOutlined />
                  <span className="emailButton">Email</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/jonathan-basallaje/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    width: 124,
                    textAlign: "left",
                    borderRadius: "45px",
                    borderColor: "#FDDAA5",
                    marginBottom: "8px",
                    marginRight: "8px",
                    borderWidth: "2px",
                    "&:hover": { borderColor: "#FDDAA5", borderWidth: "2px", background: "white" },
                  }}
                >
                  <LinkedIn />
                  <span className="linkedInButton">LinkedIn</span>
                </Button>
              </a>
              <a href="https://github.com/jbasallaje" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    width: 110,
                    textAlign: "left",
                    borderRadius: "45px",
                    borderColor: "#FDDAA5",
                    borderWidth: "2px",
                    "&:hover": { borderColor: "#FDDAA5", borderWidth: "2px", background: "white" },
                  }}
                >
                  <GitHub />
                  <span className="gitHubButton">GitHub</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FabWapper />
    </>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  handleFabIcon,
  showShareButton,
})(About);
