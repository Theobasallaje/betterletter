import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
import "./IconMenu.scss";

function IconMenu(props) {
  const useStyles = makeStyles({
    iconMenu: {
      float: "right",
      //   width: "200px",
      //   height: "100px",
      //   border: "2px solid red",
    },
  });

  const classes = useStyles();
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }} className={classes.iconMenu}>
      <MenuList>
        {/* <Link onClick={props.handleCopy} className="copyLink noSelect"> */}
        <MenuItem onClick={props.handleCopy}>
          <div className="copyLink noSelect">
            <ListItemIcon>
              <ContentCopy />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </div>
        </MenuItem>
        <MenuItem onClick={props.handleDownload}>
          <div className="downloadLink noSelect">
            <ListItemIcon>
              <FileDownload />
            </ListItemIcon>
            <ListItemText>Download</ListItemText>
          </div>
        </MenuItem>
        <MenuItem onClick={props.handleEmail}>
          <div className="emailLink noSelect">
            <ListItemIcon>
              <EmailOutlined />
            </ListItemIcon>
            <ListItemText>Email</ListItemText>
          </div>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  toggleDesktopShareSheet,
})(IconMenu);
