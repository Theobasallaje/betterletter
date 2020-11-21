import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./ShareButton.scss";
import { handleFabIcon } from "./../../actions";

class ShareButton extends Component {
  // handleFabIcon = (icon) => {
  //   switch (icon) {
  //     case "back":
  //       this.props.handleFabIcon("back");
  //       // ? Why is this not doing anything, home unmounting too quickly?
  //       // this.props.handleHomeAnimation('animate__animated animate__bounceIn');
  //       break;
  //     case "clipboard":
  //       this.props.handleFabIcon("clipboard");
  //       break;
  //     case "info":
  //       this.props.handleFabIcon("info");
  //       break;
  //     default:
  //       this.props.handleFabIcon("info");
  //       break;
  //   }
  // };

  // handleClipBoard = () => {
  //   this.props.handleCopyConfirmationAnimation(
  //     "copyConfirmation animate__animated animate__backInDown",
  //     "copyConfirmation animate__animated animate__fadeOut"
  //   );
  //   var text = this.props.editorRef.current.props.editorState
  //     .getCurrentContent()
  //     .getPlainText();
  //   navigator.clipboard.writeText(text).then(
  //     function () {
  //       console.log("Async: Copying to clipboard was successful!");
  //     },
  //     function (err) {
  //       console.error("Async: Could not copy text: ", err);
  //     }
  //   );
  // };

  handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "tdraft",
          text: this.props.editorRef.current.props.editorState.getCurrentContent().getPlainText(),
          // url: "https://tdraft.io",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  render() {
    return (
      <div class="fabContainer">
        <div className="fabButtonContainer">
          <div className="shareButton" onClick={this.handleShare}>
            <FontAwesomeIcon className="icon" icon={faShare} size="xs" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fabIcon: state.fab.fabIcon,
  editorRef: state.textEditor.ref,
});

export default connect(mapStateToProps, { handleFabIcon })(ShareButton);
