import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import {} from "../../actions";
import tangerineLogo from "./../../images/tdraft_tangerine.png";
import {
  // EmailShareButton,
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
  // TelegramShareButton,
  // TumblrShareButton,
  // TwitterShareButton,
  // ViberShareButton,
  // VKShareButton,
  // WhatsappShareButton,
  // WorkplaceShareButton,
  // EmailIcon,
  // FacebookIcon,
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
  // TelegramIcon,
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
        <div className="Demo__some-network">
          <FacebookShareButton
            url='http://github.com'
            quote='Github'
            className="Demo__some-network__share-button"
            >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { })(
  ShareSheet
);
