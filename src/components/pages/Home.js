import React, { Component } from "react";
import { connect } from "react-redux";
import TextEditor from "./../TextEditor";
import { handlePlaceHolder } from './../../actions'
// import placeholder from "./../../images/tdraft_placeholder.png";
// import placeholderSmall from "./../../images/tdraft_placeholder_small.png";
import placeholderLowerCase from "./../../images/tdraft_placeholder_lower_case.png";
import Fab from "./../Fab/Fab";
import "./Home.scss";
import 'animate.css';

class Home extends Component {

  state = {
    homeContainerClass: '',
    copyConfirmationClass: 'copyConfirmation',
    showCopyConfrimation: false,
  }

  // componentWillUnmount () {
  //   document.getElementById('homeContainer').className = 'animate__animated animate__bounceOutLeft';
  // }

  handlePlaceHolder = () => {
    this.props.handlePlaceHolder(false);
  }

  handleHomeAnimation = (className) => {
    this.setState({
      homeContainerClass: className,
    })
    console.log('Inisde handleHomeExit!');
  }

  handleCopyConfirmationAnimation = (className) => {
    this.setState({
      showCopyConfrimation: true,
      copyConfirmationClass: className,
    })
    console.log('Inisde handleHomeExit!');
  }

  render() {
    return (
      <div id='homeContainer' className={this.state.homeContainerClass}>
        {/* //! adding animation here made the fab have unexpected behavior, not coming up with keyboard on Android */}
        {this.state.showCopyConfrimation && <div className={this.state.copyConfirmationClass}>Copied!</div>}
        <TextEditor handleHomeAnimation={this.handleHomeAnimation}/>
        {this.props.placeHolder && (
          <div className="placeholderContainer" onClick={this.handlePlaceHolder}>
            {/* <img className="placeholder" src={placeholder} alt="placeholder" /> */}
            {/* <img className="placeholder" src={placeholderSmall} alt="placeholder" /> */}
            <img className="placeholder animate__animated animate__rubberBand" src={placeholderLowerCase} alt="placeholder" />
          </div>
        )}
        <Fab handleCopyConfirmationAnimation={this.handleCopyConfirmationAnimation}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorRef: state.textEditor.ref,
});

export default connect(mapStateToProps, { handlePlaceHolder })(Home);
