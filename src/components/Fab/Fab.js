import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faClipboard,
  faShare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// import { Route, Switch } from './node_modules/react-router-dom';
// import InfoModal from './../../components/InfoModal/InfoModal';
import "./Fab.scss";
import { handleFabIcon } from "./../../actions";

class Fab extends Component {
  //   <Switch>
  //      <Route exact path="/" component={InfoModal} />
  //   </Switch>

  handleFabIcon = (icon) => {
    switch (icon) {
      case "back":
        this.props.handleFabIcon("back");
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

  handleClipBoard = (e) => {
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
      <>
        <div class="fabContainer">
          {/* this.props.fabIcon == 'clipboard' this.props.fabIcon == 'back' */}
          {this.props.fabIcon == "info" && (
            <Link
              onClick={() => this.handleFabIcon("back")}
              className="icon noSelect"
              to="/about"
            >
              <button class="infoFabButton">
                <FontAwesomeIcon className="icon" icon={faInfo} size="xs" />
              </button>
            </Link>
          )}
          {this.props.fabIcon == "back" && (
            <Link
              onClick={() => this.handleFabIcon("info")}
              className="icon noSelect"
              to="/"
            >
              <button class="infoFabButton">
                <FontAwesomeIcon
                  className="icon"
                  icon={faChevronLeft}
                  size="xs"
                />
              </button>
            </Link>
          )}
          {this.props.fabIcon == "clipboard" && (
            <Link
              onClick={this.handleClipBoard}
              className="icon noSelect"
              to="/"
            >
              <button class="infoFabButton">
                <FontAwesomeIcon
                  className="icon"
                  icon={faClipboard}
                  size="xs"
                />
              </button>
            </Link>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  fabIcon: state.fab.fabIcon,
  editorRef: state.textEditor.ref,
});

export default connect(mapStateToProps, { handleFabIcon })(Fab);
