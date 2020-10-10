import React, { Component } from 'react';
import { connect } from "react-redux";
import { Editor, EditorState, RichUtils } from 'draft-js';
// import Fab from './Fab/Fab';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUnderline, faCode } from '@fortawesome/free-solid-svg-icons'
import { handlePlaceHolder } from './../actions'
import './TextEditor.scss';

class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {

  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  handleClick = () => {
    console.log("handleClick ran!");
    this.props.handlePlaceHolder(false);
    this.textInput.current.focus();
    // document.getElementsByClassName("editorCoontainer").focus();
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
      <div className='editorCoontainer' onClick={this.handleClick}>
        {/* <h1>Better Letter</h1> */}
        {/* <button onClick={this.onUnderlineClick}><FontAwesomeIcon icon={faUnderline} /> Underline</button>
        <button onClick={this.onToggleCode}><FontAwesomeIcon icon={faCode} /> Code Block</button> */}
        <Editor
          editorState={this.state.editorState}
          placeholder={this.props.placeHolder ? '|  Tap anywhere to start typing' : ''}
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

const mapStateToProps = state => ({
  placeHolder: state.placeHolder.placeHolderShow
});

export default connect(mapStateToProps, { handlePlaceHolder })(
  TextEditor
);