import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShareSheet from "../ShareSheet/ShareSheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoOutlined } from "@mui/icons-material";
import {
  faInfo,
  faShare,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Fab.scss";
import {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
} from "./../../actions";

class Fab extends Component {
  handleFabIcon = (icon) => {
    switch (icon) {
      case "back":
        this.props.handleFabIcon("back");
        this.props.handlePlaceHolder(true);
        // ? Why is this not doing anything, home unmounting too quickly?
        // this.props.handleHomeAnimation('animate__animated animate__bounceIn');
        break;
      case "info":
        this.props.handleFabIcon("info");
        this.props.handlePlaceHolder(true);
        break;
      case "share":
        this.props.handleFabIcon("share");
        break;
      case "shareSheetClose":
        this.props.handleFabIcon("shareSheetClose");
        break;
      default:
        this.props.handleFabIcon("info");
        this.props.handlePlaceHolder(true);
        break;
    }
  };

  handleCopy = () => {
    this.props.handleCopyConfirmationAnimation(
      "copyConfirmation animate__animated animate__backInDown",
      "copyConfirmation animate__animated animate__fadeOut"
    );
    var text = this.props.editorState;
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
    this.props.toggleDesktopShareSheet(false);
  };

  handleShareShow = () => {
    console.log("handleShareShow Ran!");
    this.props.toggleDesktopShareSheet(true);
    this.handleFabIcon("shareSheetClose");
  };

  handleShareClose = () => {
    console.log("handleShareClose Ran!");
    this.props.toggleDesktopShareSheet(false);
    this.handleFabIcon("share");
  };

  handleShare = (e) => {
    if (this.props.isMobile) {
      if (navigator.share) {
        navigator
          .share({
            // title: "tdraft",
            text: this.props.editorState,
            // text: this.props.editorRef.current.editor.innerText,
            // url: "https://tdraft.io",
          })
          .then(() => {
            console.log("Successful share");
          })
          .catch((error) => console.log("Error sharing", error));
      }
    } else {
      // on Desktop
      e.stopPropagation();
      // console.log('this.props.showDesktopShareSheet: ', this.props.showDesktopShareSheet);
      console.log("this.props.shareSheetClose: ", this.props.fabIcon);
      this.props.showDesktopShareSheet
        ? this.handleShareClose()
        : this.handleShareShow();
    }
  };

  // handleShareClose = () => {
  //   if (this.props.isMobile) {
  //     if (navigator.share) {
  //       navigator
  //         .share({
  //           // title: "tdraft",
  //           text: this.props.editorState,
  //           // text: this.props.editorRef.current.editor.innerText,
  //           // url: "https://tdraft.io",
  //         })
  //         .then(() => {
  //           console.log("Successful share");
  //         })
  //         .catch((error) => console.log("Error sharing", error));
  //     }
  //   } else { // on Desktop
  //     this.handleFabIcon("shareSheet");
  //     // console.log('this.props.showDesktopShareSheet: ', this.props.showDesktopShareSheet);
  //     console.log('this.props.shareSheetX: ', this.props.fabIcon);
  //     this.props.showDesktopShareSheet ? this.props.toggleDesktopShareSheet(false) : this.props.toggleDesktopShareSheet(true);
  //   }
  // };

  render() {
    return (
      <div class="fabContainer">
        <div className="fabButtonContainer">
          {this.props.fabIcon === "info" && (
            <Link
              onClick={(e) => {
                e.stopPropagation();
                this.handleFabIcon("back");
              }}
              to="/about"
            >
              <div className="infoFabButton">
                <InfoOutlined className="icon" />
              </div>
            </Link>
            // <Link
            //   onClick={(e) => {
            //     e.stopPropagation();
            //     this.handleFabIcon("back");
            //   }}
            //   className="icon noSelect"
            //   to="/about"
            // >
            //   <div className="infoFabButton">
            //     <FontAwesomeIcon className="icon" icon={faInfo} size="xs" />
            //   </div>
            // </Link>
          )}
          {this.props.fabIcon === "back" && (
            <Link
              onClick={() => this.handleFabIcon("info")}
              className="icon noSelect"
              to="/"
            >
              <div className="infoFabButton">
                <FontAwesomeIcon
                  className="icon"
                  icon={faChevronLeft}
                  size="xs"
                />
              </div>
            </Link>
          )}
          {this.props.showDesktopShareSheet && (
            <ShareSheet handleCopy={this.handleCopy} />
          )}
          {/* {this.props.isMobile && this.props.fabIcon === "share" && ( */}
          {this.props.fabIcon === "share" && (
            <Link onClick={this.handleShare} className="icon noSelect">
              <div class="infoFabButton">
                <FontAwesomeIcon className="icon" icon={faShare} size="xs" />
              </div>
            </Link>
          )}
          {this.props.fabIcon === "shareSheetClose" && (
            <Link onClick={this.handleShare} className="icon noSelect">
              <div class="infoFabButton">
                <FontAwesomeIcon className="icon" icon={faTimes} size="xs" />
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fabIcon: state.fab.fabIcon,
  showDesktopShareSheet: state.fab.showDesktopShareSheet,
  editorState: state.textEditor.editorState,
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  handlePlaceHolder,
  toggleDesktopShareSheet,
})(Fab);
