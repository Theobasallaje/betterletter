// Author: Theo Basallaje
import React, { useEffect, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShareSheet from "../ShareSheet/ShareSheet";
import {
  InfoOutlined,
  ArrowBackIosNew,
  Send,
  Clear,
} from "@mui/icons-material";
import { Fab } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { handleFabIcon, handlePlaceHolder } from "../../actions";

const FabWrapper = (props) => {
  const [fabBottom, setFabBottom] = useState("16px");
  const ua = navigator.userAgent;

  const theme = createTheme({
    palette: {
      // primary: {
      //   main: grey[400],
      // },
      primary: grey,
      secondary: grey,
    },
  });

  const useStyles = makeStyles({
    root: {
      textDecoration: "none",
      // float: "right",
      margin: "0 0 0 80%",
      bottom: fabBottom,
      right: "3%",
      position: "absolute",
    },
  });

  const handleFabIcon = (icon) => {
    switch (icon) {
      case "back":
        props.handleFabIcon("back");
        props.handlePlaceHolder(true);
        // ? Why is this not doing anything, home unmounting too quickly?
        // props.handleHomeAnimation('animate__animated animate__bounceIn');
        break;
      case "info":
        props.handleFabIcon("info");
        props.handlePlaceHolder(true);
        break;
      case "share":
        props.handleFabIcon("share");
        break;
      case "shareSheetClose":
        props.handleFabIcon("shareSheetClose");
        break;
      default:
        props.handleFabIcon("info");
        props.handlePlaceHolder(true);
        break;
    }
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        {props.fabIcon === "info" && (
          <Link
            onClick={(e) => {
              e.stopPropagation();
              handleFabIcon("back");
            }}
            to="/about"
          >
            {/* <Fab color="primary" > */}
            <Fab>
              <InfoOutlined className="icon" />
            </Fab>
          </Link>
        )}
        {props.fabIcon === "back" && (
          <Link
            onClick={(e) => {
              e.stopPropagation();
              handleFabIcon("info");
            }}
            to="/"
          >
            <Fab className="infoFabButton">
              <ArrowBackIosNew className="icon" />
            </Fab>
          </Link>
        )}
      </Box>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  fabIcon: state.fab.fabIcon,
  editorState: state.textEditor.editorState,
  editorClass: state.textEditor.editorClass,
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  handlePlaceHolder,
})(FabWrapper);
