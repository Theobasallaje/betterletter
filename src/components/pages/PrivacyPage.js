import React, { Component, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import tangerineIcon from "../../images/tangerine_icon.png";
import IJNA from "../../images/IJNA_logo.png";
import FabWrapper from "../FabWrapper/FabWrapper";
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import "./PrivacyPage.scss";
import "animate.css";
const PrivacyPage = (props) => {

  const history = useNavigate();

  useEffect(() => {

  }, []);

  const showEditor = () => {
    history("/");
  };

  return (
    <div
      id="privacyPageContainer"
    >
      <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
        <Toolbar variant="dense" className="privacyToolbar">
          <Link
            // className={classes.brandName}
            // onClick={(e) => {
            //   e.stopPropagation();
            //   // handleFabIcon("back");
            // }}
            to="/"
          >
            <IconButton
              // size="large"
              // edge="start"
              // color="inherit"
              aria-label="back to home"
              sx={{ mr: 1, pr: 0, color: "black" }}
            >
              <ArrowBack />
            </IconButton>
            <Typography component="span" sx={{ fontSize: 15, color: "black" }}>
              BACK TO HOME
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="privacyInfoContainer">
        <div className="privacyContent">
          <h1 className="privacyPolicyHeader">Privacy Policy</h1>
          <h2 className="privacyHeader">Overview</h2>
          <p className="privacyParagraph">
            The purpose of this privacy policy and disclosure is to communicate how your data is stored and used in tdraft.io.
          </p>
          <h2 className="privacyHeader">Data</h2>
          <p className="privacyParagraph">
            tdraft.io does not collect or store personally identifiable information. tdraft.io does not ask for or otherwise collect your name, email address, phone number, or physical address.
            <br /><br />
            The text you type into tdraft.io's editor is stored on your local machine. tdraft.io cannot see or collect the text you type into the tdraft.io editor.
            <br /><br />
            tdraft.io does collect aggregated (de-identified) data via the marketing analytics platform, Google Analytics, for the purpose of analyzing trends in usage and to ensure the proper functioning of tdraft.io.
          </p>
          <h2 className="privacyHeader">Changes</h2>
          <p className="privacyParagraph">
            This policy may change over time as the functionality of tdraft.io is expanded. Any changes to this policy will be documented and dated on this page.
          </p>
          <h2 className="privacyHeader">Contact</h2>
          <p className="privacyParagraph">
            If you have any questions or would like to make any requests regarding your data and tdraft.io, please reach out to us using the following email address:
          </p>
          <a class="privacyEmailLink" href="mailto:jbasallaje@gmail.com" target="_blank" rel="noopener noreferrer">
            jbasallaje@gmail.com
          </a>
        </div>
      </div>
    </div >
  );
};

const mapStateToProps = (state) => ({
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps)(PrivacyPage);
