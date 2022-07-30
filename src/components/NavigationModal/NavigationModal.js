import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentPaste from "@mui/icons-material/ContentPaste";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ContentCopy, EmailOutlined, FileDownload } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Cloud from "@mui/icons-material/Cloud";
import { handleFabIcon, toggleDesktopShareSheet } from "../../actions";
//! Look into material ui download icon - https://fonts.google.com/icons?icon.query=download
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  // TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
} from "react-share";

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

//   const useStyles = makeStyles({
//     iconMenu: {
//       float: "right",
//       //   width: "200px",
//       //   height: "100px",
//       //   border: "2px solid red",
//     },
//   });

//   const classes = useStyles();
  return (
    <Modal
      open={props.showModal}
      onClose={!props.showModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          There are some changes? Are you sure you want to navigate!!!!
        </Typography>
        <button onClick={props.cancelNavigation}>
          No
        </button>
        <button onClick={props.confirmNavigation}>
          Yes
        </button>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
      </Box>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
//   editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, {
//   handleFabIcon,
//   toggleDesktopShareSheet,
})(NavigationModal);
