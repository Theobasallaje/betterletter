import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  toggleDesktopShareSheet,
} from "./../actions";
import "./TextEditor.scss";

function TextEditor({
  placeHolder,
  fabIcon,
  isMobile,
  handlePlaceHolder,
  handleFabIcon,
  changeEditor,
  toggleDesktopShareSheet,
}) {
  let refEditor = useRef("editor");
  const [editorContainerClass, setEditorContainerClass] =
    useState("editorContainer");
  const [focused, setFocused] = useState(false);
  const [prevViewport, setPrevViewport] = useState(null);

  useEffect(() => {
    setPrevViewport(visualViewport.height);
    if (focused === false) {
      handleClick();
    }
    alert(
      `USEFFECT viewport: ${visualViewport.height}, focus: ${focused}, prevViewport: ${prevViewport}`
    );
  }, [focused, visualViewport.height]);

  const handleClick = () => {
    console.log("handleClick ran!");
    if (placeHolder) {
      setFocused(true);
      handlePlaceHolder(false);
      handleFabIcon("share");
      toggleDesktopShareSheet(false);
    }
    refEditor.current.focus();
    alert(`HANDLE CLICK viewport: ${visualViewport.height}, focus: ${focused}, prevViewport: ${prevViewport}`);
  };

  const handleChange = (event) => {
    changeEditor(event.target.value);
  };

  const handleMobileFocus = () => {
    isMobile && setEditorContainerClass("editorContainerKeyboard");
  };

  const handleMobileBlur = () => {
    setFocused(false);
    alert("BLUR!");
  };

  return (
    <div className={editorContainerClass} onClick={handleClick}>
      <textarea
        tabIndex={-1}
        onChange={handleChange}
        ref={refEditor}
        onFocus={handleMobileFocus}
        placeHolder={`${visualViewport.height}`}
        onBlur={handleMobileBlur}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
  fabIcon: state.fab.fabIcon,
  isMobile: state.placeHolder.isMobile,
});

export default connect(mapStateToProps, {
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  toggleDesktopShareSheet,
})(TextEditor);
