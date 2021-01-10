import React, { Component } from "react";
import { connect } from "react-redux";
import { Editor, EditorState, RichUtils } from "draft-js";
// import Fab from './Fab/Fab';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUnderline, faCode } from '@fortawesome/free-solid-svg-icons'
import { handlePlaceHolder, handleFabIcon, handleEditorRef } from "./../actions";
import "./TextEditor.scss";

class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    if (!this.props.placeHolder) this.textInput.current.focus();
  }

  componentDidUpdate() {
    if (!this.props.placeHolder) this.textInput.current.focus();
  }
  
  onChange = (editorState) => {
    this.setState({ editorState });
    // this.props.handleEditorRef(this.textInput);
    // console.log('content updated!');
  };

  handleClick = () => {
    console.log("handleClick ran!");
    if (this.props.placeHolder) {
      this.props.handlePlaceHolder(false);
      // this.props.handleHomeAnimation('animate__animated animate__flipInY');
      this.props.handleFabIcon("clipboard");
      this.props.handleEditorRef(this.textInput);
    }
    this.textInput.current.focus();
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  };

  render() {
    return (
      <div className="editorContainer" onClick={this.handleClick}>
        {/* <h1>Better Letter</h1> */}
        {/* <button onClick={this.onUnderlineClick}><FontAwesomeIcon icon={faUnderline} /> Underline</button>
        <button onClick={this.onToggleCode}><FontAwesomeIcon icon={faCode} /> Code Block</button> */}
        <Editor
          editorState={this.state.editorState}
          // placeholder={this.props.placeHolder && "|  Tap anywhere"}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          ref={this.textInput}
        />
        {/* <Fab /> */}
      </div>
    );
  }
}

// export default TextEditor;

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
});

export default connect(mapStateToProps, { handlePlaceHolder, handleFabIcon, handleEditorRef })(
  TextEditor
);
