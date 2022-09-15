import * as React from "react";
import { connect } from "react-redux";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "animate.css";
import "./NavigationModal.scss";

function NavigationModal(props) {
  const theme = createTheme({
    typography: {
      "fontFamily": `"Montserrat", "sans-serif"`,
    }
  });

  function changeBackgroundColor(e) {
    console.log('close!', document.getElementsByClassName('css-hz1bth-MuiDialog-container')[0]);
  }

  return (
    <Dialog
      open={props.showModal}
      onClose={!props.showModal}
      aria-labelledby="Leave this page confirmation modal"
      aria-describedby="Leave this page confirmation modal"
      onClick={changeBackgroundColor}
      PaperProps={{ sx: { width: 300 } }}
    >
      <ThemeProvider theme={theme}>
        <DialogTitle id="alert-dialog-title">
          {"Leave this page?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your draft will not be saved.
          </DialogContentText>
        </DialogContent>
      </ThemeProvider>
      <DialogActions>
        <Button onClick={props.cancelNavigation}>CANCEL</Button>
        <Button variant="contained" onClick={props.confirmNavigation}>
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
