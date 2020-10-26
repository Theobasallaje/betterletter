import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faCopy,
  // faShare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Fab.scss";
import { handleFabIcon } from "./../../actions";

class Fab extends Component {

  handleFabIcon = (icon) => {
    switch (icon) {
      case "back":
        this.props.handleFabIcon("back");
        // ? Why is this not doing anything, home unmounting too quickly?
        // this.props.handleHomeAnimation('animate__animated animate__bounceIn');
        break;
      case "clipboard":
        this.props.handleFabIcon("clipboard");
        break;
      case "info":
        this.props.handleFabIcon("info");
        break;
      default:
        this.props.handleFabIcon("info");
        break;
    }
  };

  handleClipBoard = () => {
    this.props.handleCopyConfirmationAnimation('copyConfirmation animate__animated animate__slideInUp')
    var text = this.props.editorRef.current.props.editorState
      .getCurrentContent()
      .getPlainText();
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
    this.props.editorRef.current.focus();
  };

  render() {
    return (
      <div class="fabContainer">
        <div className="fabButtonContainer">
          {/* this.props.fabIcon == 'clipboard' this.props.fabIcon == 'back' */}
          {this.props.fabIcon === "info" && (
            <Link
              onClick={() => this.handleFabIcon("back")}
              className="icon noSelect"
              to="/about"
            >
              <button className="infoFabButton">
                <FontAwesomeIcon className="icon" icon={faInfo} size="xs" />
              </button>
            </Link>
          )}
          {this.props.fabIcon === "back" && (
            <Link
              onClick={() => this.handleFabIcon("info")}
              className="icon noSelect"
              to="/"
            >
              <button className="infoFabButton">
                <FontAwesomeIcon
                  className="icon"
                  icon={faChevronLeft}
                  size="xs"
                />
              </button>
            </Link>
          )}
          {/* //TODO: rename in store to copy */}
          {this.props.fabIcon === "clipboard" && (
            <Link
              onClick={this.handleClipBoard}
              className="icon noSelect animate__animated animate__fadeInRightBig"
              to="/"
            >
              <button class="infoFabButton">
                <FontAwesomeIcon
                  className="icon"
                  icon={faCopy}
                  size="xs"
                />
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fabIcon: state.fab.fabIcon,
  editorRef: state.textEditor.ref,
});

export default connect(mapStateToProps, { handleFabIcon })(Fab);
