import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./ShareSheet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toggleDesktopShareSheet } from "../../actions";
import tangerineLogo from "./../../images/tdraft_tangerine.png";
import {
  EmailShareButton,
  FacebookShareButton,
  // HatenaShareButton,
  // InstapaperShareButton,
  // LineShareButton,
  // LinkedinShareButton,
  // LivejournalShareButton,
  // MailruShareButton,
  // OKShareButton,
  // PinterestShareButton,
  // PocketShareButton,
  // RedditShareButton,
  TelegramShareButton,
  // TumblrShareButton,
  // TwitterShareButton,
  // ViberShareButton,
  // VKShareButton,
  // WhatsappShareButton,
  // WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  // FacebookMessengerIcon,
  // HatenaIcon,
  // InstapaperIcon,
  // LineIcon,
  // LinkedinIcon,
  // LivejournalIcon,
  // MailruIcon,
  // OKIcon,
  // PinterestIcon,
  // PocketIcon,
  // RedditIcon,
  TelegramIcon,
  // TumblrIcon,
  // TwitterIcon,
  // ViberIcon,
  // VKIcon,
  // WeiboIcon,
  // WhatsappIcon,
  // WorkplaceIcon
} from "react-share";

class ShareSheet extends Component {
  render() {
    return (
      <div className="shareSheetContainer">
        <div className="shareButtonDiv">
          <TelegramShareButton
            beforeOnClick={() => this.props.toggleDesktopShareSheet(false)}
            url=" "
            title={this.props.editorState}
            className="shareButton"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
        <div className="shareButton">
          <FacebookShareButton
            beforeOnClick={() => this.props.toggleDesktopShareSheet(false)}
            url="https://tdraft.io"
            quote={this.props.editorState}
            className="shareButtonDiv"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButton">
          <EmailShareButton
            beforeOnClick={() => this.props.toggleDesktopShareSheet(false)}
            url=""
            subject=""
            body={this.props.editorState}
            className="shareButtonDiv"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <Link
          onClick={this.props.handleCopy}
          className="copyLink noSelect"
        >
          <div className="shareButtonDiv copyIconDiv">
            <FontAwesomeIcon className="copyIcon" icon={faCopy} size="s" />
          </div>
        </Link>
        {/* <div className="shareButtonDiv">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButton"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButton">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButtonDiv"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButtonDiv">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButton"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButton">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButtonDiv"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButtonDiv">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButton"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButton">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButtonDiv"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButtonDiv">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButton"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButton">
          <FacebookShareButton
            url='https://tdraft.io'
            quote={this.props.editorState}
            className="shareButtonDiv"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, { toggleDesktopShareSheet })(
  ShareSheet
);
