// Author: Theo Basallaje
import React from "react";
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
import {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
} from "../../actions";

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
    bottom: "16px",
    position: "absolute",
  },
  shareSheetDesktop: {
    bottom: '80px',
    margin: '0 0 0 80%',
    position: 'absolute',
    // border: '2px solid red',
    width: '56px',
    height: '186px',
    display: 'flex',
    justifyContent: 'center',
  },
});

const FabWrapper = (props) => {
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

  const handleCopy = () => {
    props.handleCopyConfirmationAnimation(
      "copyConfirmation animate__animated animate__backInDown",
      "copyConfirmation animate__animated animate__fadeOut"
    );
    var text = props.editorState;
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
    props.toggleDesktopShareSheet(false);
  };

  const handleShareShow = () => {
    console.log("handleShareShow Ran!");
    props.toggleDesktopShareSheet(true);
    handleFabIcon("shareSheetClose");
  };

  const handleShareClose = () => {
    console.log("handleShareClose Ran!");
    props.toggleDesktopShareSheet(false);
    handleFabIcon("share");
  };

  const handleShare = (e) => {
    if (props.isMobile) {
      if (navigator.share) {
        navigator
          .share({
            // title: "tdraft",
            text: props.editorState,
            // text: props.editorRef.current.editor.innerText,
            // url: "https://tdraft.io",
          })
          .then(() => {
            console.log("Successful share");
          })
          .catch((error) => console.log("Error sharing", error));
      }
    } else {
      // on Desktop
      e.stopPropagation();
      // console.log('props.showDesktopShareSheet: ', props.showDesktopShareSheet);
      console.log("props.shareSheetClose: ", props.fabIcon);
      props.showDesktopShareSheet ? handleShareClose() : handleShareShow();
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
        {/* {props.isMobile && props.fabIcon === "share" && ( */}
        {props.fabIcon === "share" && (
          <Link onClick={handleShare} className="noSelect">
            <Fab className="infoFabButton">
              <Send className="icon" />
            </Fab>
          </Link>
        )}
        {props.fabIcon === "shareSheetClose" && (
          <Link onClick={handleShare} className="noSelect">
            <Fab className="infoFabButton">
              <Clear className="icon" />
            </Fab>
          </Link>
        )}
      </Box>
      <Box className={classes.shareSheetDesktop}>
        {props.showDesktopShareSheet && <ShareSheet handleCopy={handleCopy} />}
      </Box>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  fabIcon: state.fab.fabIcon,
  showDesktopShareSheet: state.fab.showDesktopShareSheet,
  editorState: state.textEditor.editorState,
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
})(FabWrapper);
