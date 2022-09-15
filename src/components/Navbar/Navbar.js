import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import tangerineLogo from "./../../images/tdraft_tangerine.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu, SendOutlined } from "@mui/icons-material";
import ShareSheet from "../ShareSheet/ShareSheet";
import IconMenu from "../IconMenu/IconMenu";
import {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
} from "../../actions";
import { saveAs } from "file-saver";

function Navbar(props) {
  // const useStyles = makeStyles({
  //   shareSheetDesktop: {
  //     bottom: "80px",
  //     margin: "0 0 0 50%",
  //     position: "absolute",
  //     // border: '2px solid red',
  //     width: "56px",
  //     height: "186px",
  //     display: "flex",
  //     justifyContent: "center",
  //   },
  // });

  const theme = createTheme({
    typography: {
      fontFamily: ['"Montserrat"', "sans-serif"].join(","),
    },
  });

  const useStyles = makeStyles({
    brandName: {
      color: "#000000",
      fontSize: "20px",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
    sendIcon: {
      color: "black",
      "&:hover": {
        cursor: "pointer",
      }
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
  };

  const handleShare = (e) => {
    // debugger;
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
      // console.log('props.showDesktopShareSheet: ', props.showDesktopShareSheet);
      // console.log("props.shareSheetClose: ", props.fabIcon);
      props.showDesktopShareSheet ? handleShareClose() : handleShareShow();
    }
  };

  const handleCopy = () => {
    props.handleCopySnackBar()
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

  const handleEmail = () => {
    window.open(`mailto:?body=${props.editorState}`);
    props.toggleDesktopShareSheet(false);
    console.log("handleEmail Ran!");
  };

  const handleDownload = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${month}_${day}_${year}`;
    let time =
      date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
    let textContent = new Blob([props.editorState], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(textContent, `${fullDate}_tdraft.txt`);
    props.toggleDesktopShareSheet(false);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className="navContainer" sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: 'none' }}>
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                className={classes.brandName}
                // onClick={(e) => {
                //   e.stopPropagation();
                //   // handleFabIcon("back");
                // }}
                to="/about"
              >
                tdraft.io
              </Link>
            </Typography>
            <SendOutlined
              alt='Send'
              title='Send'
              onClick={(e) => { 
                e.stopPropagation();
                handleShare(); 
              }} 
              className={classes.sendIcon}
            />
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        {props.showDesktopShareSheet && (
          <IconMenu
            handleCopy={handleCopy}
            handleEmail={handleEmail}
            handleDownload={handleDownload}
          />
        )}
      </Box>
    </ThemeProvider>
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
