import * as React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons"
import { faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { ContentCopy, Email } from '@mui/icons-material';
import Cloud from '@mui/icons-material/Cloud';
import { handleFabIcon, toggleDesktopShareSheet } from "../../actions";
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
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem className='menuItem'>
          <TelegramShareButton
            beforeOnClick={() => { props.toggleDesktopShareSheet(false); props.handleFabIcon('share'); }}
            url=" "
            title={props.editorState}
            className="shareButton"
          >
            <ListItemIcon>
              {/* <ContentCut fontSize="small" />
              <TelegramIcon size={32} round /> */}
              {/* <FontAwesomeIcon icon="fa-brands fa-telegram" /> */}
              <FontAwesomeIcon className="" icon={faTelegram} size="xl" />
            </ListItemIcon>
            <ListItemText>Telegram</ListItemText>
            {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
          </TelegramShareButton>
        </MenuItem>
        <FacebookShareButton
          beforeOnClick={() => { props.toggleDesktopShareSheet(false); props.handleFabIcon('share'); }}
          url="https://tdraft.io"
          quote={props.editorState}
        // className="shareButton"
        >
          <MenuItem>
            <ListItemIcon>
              {/* <ContentCut fontSize="small" />
              <TelegramIcon size={32} round /> */}
              {/* <FontAwesomeIcon icon="fa-brands fa-telegram" /> */}
              <FontAwesomeIcon className="" icon={faFacebook} size="m" />
            </ListItemIcon>
            <ListItemText>Facebook</ListItemText>
            {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
          </MenuItem>
        </FacebookShareButton>
        <Divider />
        <EmailShareButton
          beforeOnClick={() => { props.toggleDesktopShareSheet(false); props.handleFabIcon('share'); }}
          url=""
          subject=""
          body={props.editorState}
        // className="shareButtonDiv"
        >
          <MenuItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText>Email</ListItemText>
          </MenuItem>
        </EmailShareButton>
        <Link
          onClick={props.handleCopy}
          className="copyLink noSelect"
        >
          <MenuItem>
            <ListItemIcon>
              {/* <FontAwesomeIcon className="" icon={faCopy} size="m" /> */}
              <ContentCopy />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
            {/* <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography> */}
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, { handleFabIcon, toggleDesktopShareSheet })(
  IconMenu
);