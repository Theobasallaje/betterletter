import React, {
  useEffect,
  useCallback,
  useState,
} from "react";
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
import Tooltip from '@mui/material/Tooltip';
import { Menu, SendOutlined } from "@mui/icons-material";
import IconMenu from "../IconMenu/IconMenu";
import {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
} from "../../actions";
import { saveAs } from "file-saver";
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        // 🌙 Moon icon
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'><path fill='white' d='M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z'/></svg>")`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#FDDAA5',
        border: "2px solid black",
        borderRadius: "100px",
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'black',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // ☀️ Sun icon (displayed when unchecked)
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'><path fill='white' d='M9.305 1.667V3.75h1.39V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.474-1.473zm10.802 0l-1.474 1.473.982.982 1.474-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.861 4.861A4.872 4.872 0 0010 14.861 4.872 4.872 0 0014.861 10 4.872 4.872 0 0010 5.139zm0 1.39A3.462 3.462 0 0113.472 10a3.462 3.462 0 01-3.472 3.472A3.462 3.462 0 016.528 10 3.462 3.462 0 0110 6.528zM1.666 9.305v1.39h2.083v-1.39H1.666zm14.584 0v1.39h2.083v-1.39h-2.083zM5.09 13.928L3.617 15.4l.982.982 1.473-1.474-.982-.98zm9.82 0l-.982.98 1.473 1.474.982-.982-1.473-1.472zM9.305 16.25v2.083h1.39V16.25h-1.39z'/></svg>")`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#FDDAA5',
    border: "2px solid black",
    borderRadius: "100px",
  },
}));

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

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: ['"Montserrat"', "sans-serif"].join(","),
    },
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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
    console.log('handleCopy ran!');
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
            <FormControlLabel
              control={
                <MaterialUISwitch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              }
              sx={{paddingLeft: "12px"}}
            />
            <Tooltip title="Send">
              <SendOutlined
                alt='Send'
                title='Send'
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className={classes.sendIcon}
              />
            </Tooltip>
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
