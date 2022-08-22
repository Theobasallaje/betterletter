import React, { Component, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tangerineIcon from "../../images/tangerine_icon.png";
import IJNA from "../../images/IJNA_logo.png";
import FabWrapper from "../FabWrapper/FabWrapper";
import Button from '@mui/material/Button';
import About from "./About";
import "./Home.scss";
import "animate.css";
const Home = (props) => {
  // const history = useHistory();
  const history = useNavigate();
  const [homeContainerClass, setHomeContainerClass] = useState("");
  const [copyConfirmationClass, setCopyConfirmationClass] = useState("copyConfirmation");
  const [showCopyConfrimation, setShowCopyConfirmation] = useState(false);

  useEffect(() => {

  }, []);

  const showEditor = () => {
    history("/");
  };

  return (
    <div
      id="homeContainer"
      className={homeContainerClass}
    >
      <div
        className="textIconContainer"
      >
        {/* //! put in another container? want tangerine aligned with middle of text */}
        {/* //TODO: make h1 */}
        <p className="title">tdraft.io</p>
        <img
          className="tangerineIcon"
          src={tangerineIcon}
          alt="tdraft icon and text"
        />
      </div>
      <Link to='/'>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            background: "#FDDAA5",
            textAlign: "left",
            borderColor: "black",
            marginTop: "22vh",
            marginBottom: "12vh",
            marginRight: "8px",
            borderWidth: "2px",
            "&:hover": { borderWidth: "2px", borderColor: "black", background: "#FDDAA5" },
          }}
        >
          Start Typing
        </Button>
      </Link>
      <About />
      <img
        className="ijnaLogo"
        src={IJNA}
        alt="IJNA logo"
      />
      <p className="copyRightInfo">&#169; IJNA 2022</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps)(Home);
