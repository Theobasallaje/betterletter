import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  checkFocus,
  changeFocus,
} from "./../actions";
import "./TextEditor.scss";

// FIXME:
function TextEditor({
  placeHolder,
  handlePlaceHolder,
  handleFabIcon,
  changeEditor,
  isIOS,
  checkFocus,
  changeFocus,
  makeFocused,
}) {
  // console.log(props);
  // TODO: uninstall Draftjs
  let refEditor = useRef("editor");
  const hydrate = useCallback((e) => {
    // e.preventDefault();
    console.log("hydrate()");
    console.log("TextEditor Useffect() ran!");
    if (makeFocused) handleFocus(true);
  }, [makeFocused]);
  useEffect(() => {
    console.log("Inside UseEffect");
    hydrate();
  }, [hydrate]); //! When I put props in the dependency array, it keeps looping and running the useEffect, WHY??

  // https://dev.to/r3wt/useeffect-missing-dependency-need-advice-4d6b
  // https://stackoverflow.com/questions/54219238/how-to-stop-editor-draftjs-cursor-jumping-to-beginning-of-text-while-typing-in-r

  const handleClick = () => {
    console.log("handleClick ran!");
    if (placeHolder) {
      handlePlaceHolder(false);
      // handleHomeAnimation('animate__animated animate__flipInY');
      handleFabIcon("clipboard");
    }
    refEditor.current.focus();
    if (isIOS) {
      //TODO: detect onBlur here somehow
    }
  };

  const handleChange = (event) => {
    changeEditor(event.target.value);
  };

  const handleFocus = (focus) => {
    if (focus) {
      refEditor.current.focus();
    }
  }

  const handleOnFocusOnBlur = (isFocus) => {
    if (isFocus) {
      checkFocus(true);
    } else {
      checkFocus(false);
      changeFocus(false);
    }
  };

  return (
    <div className="editorContainer" onClick={handleClick}>
      <textarea
        id="editor"
        tabIndex={-1}
        onChange={handleChange}
        onFocus={() => handleOnFocusOnBlur(true)}
        onBlur={() => handleOnFocusOnBlur(false)}
        ref={refEditor}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
  isIOS: state.fab.isIOS,
  makeFocused: state.textEditor.makeFocused,
});

export default connect(mapStateToProps, {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  checkFocus,
  changeFocus,
})(TextEditor);
