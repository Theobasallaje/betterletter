import React, {
  useEffect,
  useCallback,
  useState,
} from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import TextEditor from "./../TextEditor";
import NavigationModal from "../NavigationModal/NavigationModal";
import { useCallbackPrompt } from "../../hooks/useCallbackPrompt";
import {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  toggleDesktopShareSheet,
} from "./../../actions";
import Snackbar from "@mui/material/Snackbar";
import styles from "./EditorPage.module.scss";

const EditorPage = (props) => {
  const [copyConfirmationClass, setCopyConfirmationClass] = useState("copyConfirmation");
  const [showCopyConfrimation, setShowCopyConfirmation] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Deconstructing returned values from the custom hook
  const [showPrompt, confirmNavigation, cancelNavigation, startBlocking] = useCallbackPrompt(props.hasText);

  // When user tries to navigate, block the navigation and show the prompt
  useEffect(() => {
    if (props.hasText) {
      // If user is editing and tries to navigate away, trigger blocker
      startBlocking();
    }
  }, [props.hasText, startBlocking]);

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
      {/* <NavigationModal
        showModal={showPrompt}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      /> */}
      {!props.isMobile && showCopyConfrimation && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
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