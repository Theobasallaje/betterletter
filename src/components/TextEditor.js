import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  toggleDesktopShareSheet,
} from "./../actions";
import "./TextEditor.scss";

// FIXME:
function TextEditor({
  placeHolder,
  handlePlaceHolder,
  handleFabIcon,
  changeEditor,
  toggleDesktopShareSheet,
}) {
  // console.log(props);
  // TODO: uninstall Draftjs
  let refEditor = useRef("editor");
  const hydrate = useCallback(() => {
    handleClick();
    window.addEventListener("keydown", handleKeyPressFocus);
    console.log("hydrate()");
  }, []);
  useEffect(() => {
    console.log("Inside UseEffect");
    hydrate();
    return () => {
      window.removeEventListener("keydown", handleKeyPressFocus);
    };
  }, [hydrate]); //! When I put props in the dependency array, it keeps looping and running the useEffect, WHY??

  // https://dev.to/r3wt/useeffect-missing-dependency-need-advice-4d6b
  // https://stackoverflow.com/questions/54219238/how-to-stop-editor-draftjs-cursor-jumping-to-beginning-of-text-while-typing-in-r

  const handleClick = () => {
    console.log("handleClick ran!");
    if (placeHolder) {
      handlePlaceHolder(false);
      // handleHomeAnimation('animate__animated animate__flipInY');
      handleFabIcon("share");
      toggleDesktopShareSheet(false);
    }
    refEditor.current.focus();
  };

  const handleKeyPressFocus = (event) => {
    handleClick();
  };

  const handleChange = (event) => {
    changeEditor(event.target.value);
  };

  return (
    <div className="editorContainer" onClick={handleClick}>
      <textarea tabIndex={-1} onChange={handleChange} ref={refEditor} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  toggleDesktopShareSheet,
})(TextEditor);
