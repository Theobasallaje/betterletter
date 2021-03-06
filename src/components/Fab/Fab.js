import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isIOS } from "react-device-detect";
import {
  faInfo,
  faShare,
  faChevronLeft,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import "./Fab.scss";
import { handleFabIcon, handlePlaceHolder } from "./../../actions";

class Fab extends Component {
  state = {
    iosShareClass: "",
    iosCheck: this.props.isIOS,
  };

  componentDidMount() {
    console.log("isIOS from Fab: ", this.props.isIOS);
    console.log("isIOS from Fab from package: ", isIOS);
    console.log("iosCheck from Fab: ", this.iosCheck);
    if (isIOS) {
      this.setState({
        iosShareClass: "iosShare",
      });
      console.log("iosShareClass", this.iosShareClass);
    }
    console.log("iosShareClass AFTER setState()", this.iosShareClass);
    // if (this.props.isIOS) {
    //   this.setState({
    //     iosShareClass: "iosShare",
    //   });
    // console.log(this.iosShareClass);
    // }
  }

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
      <div class="fabContainer">
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
          {this.props.isMobile && this.props.fabIcon === "share" && (
            <Link onClick={this.handleShare} className="icon noSelect" to="/">
              {/* <div class={`infoFabButton ${this.props.isIOS && this.iosShareClass}`}> */}
              <div class={`infoFabButton ${isIOS && this.props.isFocused ? 'iosShare' : ''}`}>
                <FontAwesomeIcon className="icon" icon={isIOS && this.props.isFocused ? faChevronDown : faShare} size="xs" />
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
