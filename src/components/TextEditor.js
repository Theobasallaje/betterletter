import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  checkFocus,
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
}) {
  // console.log(props);
  // TODO: uninstall Draftjs
  let refEditor = useRef("editor");
  const hydrate = useCallback(() => {
    console.log("hydrate()");
  }, []);
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

  const handleFocus = (isFocus) => {
    if (isFocus) {
      checkFocus(true);
    } else {
      checkFocus(false);
    }
  };

  return (
    <div className="editorContainer" onClick={handleClick}>
      <textarea
        id="editor"
        tabIndex={-1}
        onChange={handleChange}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        ref={refEditor}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
  isIOS: state.fab.isIOS,
});

export default connect(mapStateToProps, {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  checkFocus,
})(TextEditor);
