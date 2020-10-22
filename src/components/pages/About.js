import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleFabIcon } from "./../../actions";
import Fab from "./../Fab/Fab";
import "./About.scss";

// function About(props) {
function About({ handleFabIcon }) {
  useEffect(() => {
    handleFabIcon("back");
  }, [handleFabIcon]); // dependencies

  return (
    <>
      {/* //TODO: add tdraft logo here*/}
      <div className="aboutContainer">
        <div className="aboutContent">
          <div>
            <p>
              tdraft is a simple, mobile-optimized text editor for the
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  handleFabIcon,
})(About);
