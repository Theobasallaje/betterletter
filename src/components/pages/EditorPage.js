import React, {
  Component,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import { Prompt } from "react-router-dom";
import { useCallbackPrompt } from "../../hooks/useCallbackPrompt";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import TextEditor from "./../TextEditor";
import NavigationModal from "../NavigationModal/NavigationModal";
import {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  toggleDesktopShareSheet,
} from "./../../actions";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import placeholder from "./../../images/tdraft_placeholder.png";
// import placeholderSmall from "./../../images/tdraft_placeholder_small.png";
import placeholderLowerCase from "./../../images/tdraft_placeholder_lower_case.png";
import placeholderDesktop from "./../../images/tdraft_desktop_placeholder_lower_case.png";
import FabWrapper from "../FabWrapper/FabWrapper";
import styles from "./EditorPage.module.scss";
import "animate.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const EditorPage = (props) => {
  const [copyConfirmationClass, setCopyConfirmationClass] =
    useState("copyConfirmation");
  const [showCopyConfrimation, setShowCopyConfirmation] = useState(false);
  const [open, setOpen] = useState(false);
  // const [showModal, setShowMoal] = useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(
    props.hasText
  );
  // state = {
  //   homeContainerClass: "",
  //   copyConfirmationClass: "copyConfirmation",
  //   showCopyConfrimation: false,
  // };

  // beforeUnloadListener = (event) => {
  //   // event.preventDefault();
  //   console.log("event", event);
  //   // ! return null if no content in editor to have this not show up
  //   return (event.returnValue = "Are you sure you want to exit?");
  //   // return null;
  // };

  // componentDidMount() {
  //   // if (!this.props.placeHolder) alert("Test!");
  //   window.addEventListener("beforeunload", this.beforeUnloadListener);
  // }

  // componentWillUnmount() {
  //   // window.location.reload();
  //   window.removeEventListener("beforeunload", this.beforeUnloadListener);
  //   if (this.props.editorState !== '') {
  //     let confirmation = window.confirm("Changes you made may not be saved.");
  //     console.log(!confirmation);
  //     !confirmation && this.props.history.block(()=>{});
  //   }
  //   // <Prompt
  //   //   when={this.props.editorState !== ''}
  //   //   message="Are you sure you want to leave?"
  //   // />
  //   // !https://stackoverflow.com/questions/37145404/how-to-prevent-route-change-using-react-router
  //   // window.preventDefault();
  // }

  // const theme = createTheme({
  //   main: {
  //     backgroundColor: "white",
  //     color: "black",
  //   },
  // });

  // const useStyles = makeStyles({
  //   snackBar: {
  //     backgroundColor: "white",
  //     color: "black",
  //   },
  // });

  const handleCopyConfirmationAnimation = (classEnter, ClassExtit) => {
    setShowCopyConfirmation(true);
    setCopyConfirmationClass(classEnter);
    // this.setState({
    //   showCopyConfrimation: true,
    //   copyConfirmationClass: classEnter,
    // });
    // TODO: Look into making this a promise.
    setTimeout(() => {
      setCopyConfirmationClass(ClassExtit);
      // this.setState({
      //   copyConfirmationClass: ClassExtit,
      // });
    }, 1200);
    setTimeout(() => {
      setShowCopyConfirmation(false);
      // this.setState({
      //   showCopyConfrimation: false,
      // });
    }, 2200);
    console.log("Inisde handleHomeExit!");
  };

  const handleCopySnackBar = () => {
    setShowCopyConfirmation(true);
    setOpen(true);
    setTimeout(() => {
      handleCopySnackBarClose();
    }, 4000);
  };

  const handleCopySnackBarClose = () => {
    setOpen(false);
    setShowCopyConfirmation(false);
  };

  // const handleKeyPressFocus = () => {
  //   if (!props.keyPress) {
  //     props.handleKeyPress(true);
  //   }
  // };

  const handleDismissShareSheet = () => {
    props.showDesktopShareSheet && props.toggleDesktopShareSheet(false);
  };

  // const classes = useStyles();
  return (
    <div
      className={styles.editorPageContainer}
      onClick={handleDismissShareSheet}
    >
      <NavigationModal
        showModal={showPrompt}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      />
      {/* //! adding animation here made the fab have unexpected behavior, not coming up with keyboard on Android */}
      {!props.isMobile && showCopyConfrimation && (
        // <div className="copyConfirmationContainer">
        //   <div className={copyConfirmationClass}>Copied!</div>
        // </div>
        // <ThemeProvider theme={theme}>
        //   <Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          // autoHideDuration={1000}
          open={open}
          onClose={handleCopySnackBarClose}
          message="Copied!"
          key={"top" + "center"}
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor: "white",
              color: "black",
              minWidth: 80,
              maxWidth: 80,
              justifyContent: "center",
              padding: 0,
            },
          }}
        />
        //   </Box>
        // </ThemeProvider>
      )}
      <Navbar handleCopySnackBar={handleCopySnackBar} />
      <div className={styles.editorDiv}>
        <TextEditor />
      </div>
      {/* {!this.props.isMobile && <FabWrapper />} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  isMobile: state.placeHolder.isMobile,
  showDesktopShareSheet: state.fab.showDesktopShareSheet,
  editorState: state.textEditor.editorState,
  hasText: state.textEditor.hasText,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  showShareButton,
  toggleDesktopShareSheet,
})(EditorPage);
