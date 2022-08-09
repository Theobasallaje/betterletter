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
import placeholderLowerCase from "./../../images/tdraft_placeholder_lower_case.png";
import placeholderDesktop from "./../../images/tdraft_desktop_placeholder_lower_case.png";
import FabWrapper from "../FabWrapper/FabWrapper";
import styles from "./EditorPage.module.scss";
import "animate.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const EditorPage = (props) => {
  const [copyConfirmationClass, setCopyConfirmationClass] =
    useState("copyConfirmation");
  const [showCopyConfrimation, setShowCopyConfirmation] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(
    props.hasText
  );

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

  const handleDismissShareSheet = () => {
    props.showDesktopShareSheet && props.toggleDesktopShareSheet(false);
  };

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
      {!props.isMobile && showCopyConfrimation && (
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
      )}
      <Navbar handleCopySnackBar={handleCopySnackBar} />
      <div className={styles.editorDiv}>
        <TextEditor />
      </div>
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
