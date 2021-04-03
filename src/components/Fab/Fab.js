import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isIOS } from "react-device-detect";
import {
  faInfo,
  faShare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Fab.scss";
import { handleFabIcon, handlePlaceHolder } from "./../../actions";

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
      default:
        this.props.handleFabIcon("info");
        this.props.handlePlaceHolder(true);
        break;
    }
  };

  handleShare = () => {
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
  };

  render() {
    return (
      <div className="fabContainer">
        <div className="fabButtonContainer">
          {this.props.fabIcon === "info" && (
            <Link
              onClick={() => this.handleFabIcon("back")}
              className="icon noSelect"
              to="/about"
            >
              <div className="infoFabButton">
                <FontAwesomeIcon className="icon" icon={faInfo} size="xs" />
              </div>
            </Link>
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
          {/* {this.props.isMobile && this.props.fabIcon === "share" && ( */}
          {this.props.fabIcon === "share" && (
            <Link onClick={this.handleShare} className="icon noSelect" to="/">
              {/* <div className={`infoFabButton ${this.props.isIOS && this.iosShareClass}`}> */}
              <div className={`infoFabButton ${isIOS && 'iosShare'}`}>
                <FontAwesomeIcon className="icon" icon={faShare} size="xs" />
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
  editorState: state.textEditor.editorState,
  isMobile: state.placeHolder.isMobile,
  isIOS: state.fab.isIOS,
  isFocused: state.textEditor.isFocused,
});

export default connect(mapStateToProps, { handleFabIcon, handlePlaceHolder })(
  Fab
);
