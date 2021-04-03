import React, { Component } from "react";
import { connect } from "react-redux";
import Fab from "./../Fab/Fab";
import Navbar from "./../Navbar/Navbar";
import TextEditor from "./../TextEditor";
import {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  setViewportHieght,
  changeFocus,
} from "./../../actions";
import placeholderLowerCase from "./../../images/tdraft_placeholder_lower_case.png";
import placeholderDesktop from "./../../images/tdraft_desktop_placeholder_lower_case.png";
import "./Home.scss";
import "animate.css";

class Home extends Component {
  state = {
    homeContainerClass: "",
    copyConfirmationClass: "copyConfirmation",
    showCopyConfrimation: false,
  };

  componentDidMount() {
    // if (!this.props.placeHolder) alert("Test!");
    // let viewport = window.visualViewport;
    // console.log({viewport});
    // window.visualViewport.addEventListener("scroll", this.viewportHandler);
    // window.visualViewport.addEventListener("resize", this.viewportHandler);
    window.onbeforeunload = function () {
      // TODO: Figure out how to change the message on the alert
      // ? Can we change the placeholder back to true here?
      // ? For when launching from homescreen app - back on mobile exits?
      return "Data will be lost if you leave the page, are you sure?";
    };
    console.log("isIOS from Home: ", this.props.isIOS);
  }

  // viewportHandler = () => {
  //   var fab = document.getElementsByClassName("fab");
  //   var viewport = window.visualViewport;
  //   var layoutViewport = document.getElementById("homeContainer");
  //   console.log(fab, viewport, layoutViewport);

  //   // Since the bar is position: fixed we need to offset it by the visual
  //   // viewport's offset from the layout viewport origin.
  //   var offsetLeft = viewport.offsetLeft;
  //   var offsetTop =
  //     viewport.height -
  //     layoutViewport.getBoundingClientRect().height +
  //     viewport.offsetTop;

  //   // You could also do this by setting style.left and style.top if you
  //   // use width: 100% instead.
  //   fab.style.transform =
  //     "translate(" +
  //     offsetLeft +
  //     "px," +
  //     offsetTop +
  //     "px) " +
  //     "scale(" +
  //     1 / viewport.scale +
  //     ")";
  // };

  // componentWillUnmount() {
  //   document.getElementById('homeContainer').className = 'animate__animated animate__bounceOutLeft';
  // }

  handlePlaceHolder = () => {
    this.props.handlePlaceHolder(false);
    this.props.handleFabIcon("share");
    this.props.showShareButton(true);
    !this.props.isFocused && this.props.changeFocus(true);
    // let viewport = window.visualViewport;
    // console.log({viewport});
  };

  handleHomeAnimation = (className) => {
    this.setState({
      homeContainerClass: className,
    });
    console.log("Inisde handleHomeExit!");
  };

  handleCopyConfirmationAnimation = (classEnter, ClassExtit) => {
    this.setState({
      showCopyConfrimation: true,
      copyConfirmationClass: classEnter,
    });
    // TODO: Look into making this a promise.
    setTimeout(() => {
      this.setState({
        copyConfirmationClass: ClassExtit,
      });
    }, 1200);
    setTimeout(() => {
      this.setState({
        showCopyConfrimation: false,
      });
    }, 2200);
    console.log("Inisde handleHomeExit!");
  };

  componentWillUnmount() {
    window.visualViewport.removeEventListener("scroll", this.viewportHandler);
    window.visualViewport.removeEventListener("resize", this.viewportHandler);
  }

  render() {
    return (
      <div
        id="homeContainer"
        className={this.state.homeContainerClass}
        onClick={this.handlePlaceHolder}
      >
        {/* {!this.props.placeHolder && <Navbar />}         */}
        {/* //! adding animation here made the fab have unexpected behavior, not coming up with keyboard on Android */}
        {this.state.showCopyConfrimation && (
          <div className="copyConfirmationContainer">
            <div className={this.state.copyConfirmationClass}>Copied!</div>
          </div>
        )}
        <div className="editorDiv">
        <p>{`isFocused: ${this.props.isFocused} makeFocused ${this.props.makeFocused}`}</p>
          <TextEditor
            handleHomeAnimation={this.handleHomeAnimation}
            // onClick={}
          />
        </div>
        {this.props.placeHolder && (
          <div
            className="placeholderContainer"
            // onClick={this.handlePlaceHolder}
          >
            {/* <img className="placeholder" src={placeholder} alt="placeholder" /> */}
            {/* <img className="placeholder" src={placeholderSmall} alt="placeholder" /> */}
            <img
              className="placeholder animate__animated animate__rubberBand"
              src={
                this.props.isMobile ? placeholderLowerCase : placeholderDesktop
              }
              alt="placeholder"
            />
          </div>
        )}
        <Fab
          className="fab"
          handleCopyConfirmationAnimation={this.handleCopyConfirmationAnimation}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  isMobile: state.placeHolder.isMobile,
  isIOS: state.fab.isIOS,
  isFocused: state.textEditor.isFocused,
  makeFocused: state.textEditor.makeFocused,
});

export default connect(mapStateToProps, {
  handleFabIcon,
  handlePlaceHolder,
  showShareButton,
  setViewportHieght,
  changeFocus
})(Home);
