import React, { Component } from "react";
import { connect } from "react-redux";
import { Editor, EditorState, RichUtils } from "draft-js";
// import Fab from './Fab/Fab';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUnderline, faCode } from '@fortawesome/free-solid-svg-icons'
import { changeEditor, createEditor, handlePlaceHolder, handleFabIcon, handleEditorRef } from "./../actions";
import "./TextEditor.scss";

class TextEditor extends Component {
  constructor() {
    super();
    // TODO: Remove this local state, we only need the global editorState
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.state.editorState);
    this.props.createEditor(this.state.editorState);
    if (!this.props.placeHolder) this.textInput.current.focus();
  }

  componentDidUpdate() {
    if (!this.props.placeHolder) this.textInput.current.focus();
  }
  
  onChange = (editorState) => {
    // this.setState({ editorState });
    // this.props.changeEditor(editorState);
    // this.props.handleEditorRef(this.textInput);
    // console.log('content updated!', this.textInput);
  };

  handleClick = () => {
    console.log("handleClick ran!");
    if (this.props.placeHolder) {
      this.props.handlePlaceHolder(false);
      // this.props.handleHomeAnimation('animate__animated animate__flipInY');
      this.props.handleFabIcon("clipboard");
      this.props.handleEditorRef(this.textInput);
    }
    // this.textInput.current.focus();
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
        <Editor
          editorState={this.state.editorState} //TODO: use global state?
          handleKeyCommand={this.handleKeyCommand}
          onChange={() => this.onChange(this.props.editorState)}
          ref={this.textInput}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, { changeEditor, createEditor, handlePlaceHolder, handleFabIcon, handleEditorRef })(
  TextEditor
);