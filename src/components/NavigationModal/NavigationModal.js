import * as React from "react";
import { connect } from "react-redux";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

import "animate.css";
import "./NavigationModal.scss";

function NavigationModal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75vw",
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Dialog
      open={props.showModal}
      onClose={!props.showModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Leave this page?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you do, you will lose what you have written.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.cancelNavigation}>CANCEL</Button>
        <Button onClick={props.confirmNavigation}>
          LEAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
})(NavigationModal);
