import * as React from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import {} from "./../../actions";
import tangerineLogo from "./../../images/tdraft_tangerine.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu, Send } from "@mui/icons-material";
import ShareSheet from "../ShareSheet/ShareSheet";
import IconMenu from '../IconMenu/IconMenu';
import {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
} from "../../actions";

function Navbar(props) {

  const useStyles = makeStyles({
    shareSheetDesktop: {
      bottom: "80px",
      margin: "0 0 0 50%",
      position: "absolute",
      // border: '2px solid red',
      width: "56px",
      height: "186px",
      display: "flex",
      justifyContent: "center",
    },
  });

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
    console.log("handleShare Ran!!");
    console.log(props.isMobile);
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
    props.handleFabIcon("share");
  };

  const classes = useStyles();
  return (
    <Box className="navContainer" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="brandName">
            tdraft.io
          </Typography>
          <Send onClick={handleShare} className="sendIcon" />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
          {/* <Box className={classes.shareSheetDesktop}>
            {props.showDesktopShareSheet && (
              <ShareSheet handleCopy={handleCopy} />
            )}
          </Box> */}
      </AppBar>
      {props.showDesktopShareSheet && <IconMenu handleCopy={handleCopy}/>}
    </Box>
  );
}

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
})(Navbar);
