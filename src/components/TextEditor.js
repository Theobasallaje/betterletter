import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
// import Fab from './Fab/Fab';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUnderline, faCode } from '@fortawesome/free-solid-svg-icons'
import './TextEditor.scss';

class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  }

  render() {
    return (
      <div>
        {/* <h1>Better Letter</h1> */}
        {/* <button onClick={this.onUnderlineClick}><FontAwesomeIcon icon={faUnderline} /> Underline</button>
        <button onClick={this.onToggleCode}><FontAwesomeIcon icon={faCode} /> Code Block</button> */}
        <Editor
          editorState={this.state.editorState}
          placeholder='|  Tap anywhere to start typing'
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
        {/* <Fab /> */}
      </div>
    );
  }
}

export default TextEditor;