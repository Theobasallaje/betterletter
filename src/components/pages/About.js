import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fab from "./../Fab/Fab";
import "./About.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutContent">
          <div>
            <p>
              Better Letter is a simple, mobile-optimized text editor for the
              web.
            </p>
            <p>Type distraction free and then move your text to other apps.</p>
          </div>
          <div>
            <p className="authors">Made by:</p>
            <p className="authors">Jonathan and Theo Basallaje</p>
          </div>
        </div>
      </div>
      <Fab />
    </>
  );
}

export default About;
