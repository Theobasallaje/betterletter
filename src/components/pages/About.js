import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleFabIcon } from "./../../actions";
import Fab from "./../Fab/Fab";
import "./About.scss";
import 'animate.css';
import tangerineLogo from './../../images/tdraft_tangerine.png';

// function About(props) {
function About({ handleFabIcon }) {
  useEffect(() => {
    handleFabIcon("back");
  }, [handleFabIcon]); // dependencies

  return (
    <>
      <div className="aboutContainer animate__animated animate__bounceInLeft">
        <div className="aboutContentContainer">
          <div className="aboutContent">
            <div>
              <div className="logoContainer">
                <img className="logo animate__animated animate__heartBeat" src={tangerineLogo} alt="tdraft Tangerine Logo" />
              </div>
              {/* <img className="logo animate__animated animate__rubberBand" src={tangerineLogo} alt="tdraft Tangerine Logo" /> */}
              <p>
                tdraft is a simple, mobile-optimized text editor for the
                web.
            </p>
              <p>Type distraction free and then move your text to other apps.</p>
            </div>
            <div>
              <p className="authors">Made by:</p>
              <p className="authors">
                <a href="https://www.linkedin.com/in/jonathan-basallaje-08a043141/" target="_blank" rel="noopener noreferrer">Jonathan </a>and
              <a href="https://www.linkedin.com/in/theobasallaje/" target="_blank" rel="noopener noreferrer"> Theo Basallaje</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Fab />
    </>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  handleFabIcon,
})(About);
