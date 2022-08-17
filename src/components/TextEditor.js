import React, { useEffect, useCallback, useRef, useState } from "react";
import { connect } from "react-redux";
import { isAndroid, isIOS } from "react-device-detect";
import {
  changeEditor,
  handleEditorClass,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  handleTextDetection,
  toggleDesktopShareSheet,
} from "./../actions";
import "./TextEditor.scss";

function TextEditor({
  placeHolder,
  fabIcon,
  isMobile,
  handleEditorClass,
  handlePlaceHolder,
  handleFabIcon,
  handleTextDetection,
  hasText,
  changeEditor,
  toggleDesktopShareSheet,
}) {
  let refEditor = useRef();
  const [editorContainerClass, setEditorContainerClass] =
    useState("editorContainer");
  const [focused, setFocused] = useState(false);
  const [prevViewport, setPrevViewport] = useState(0);
  const ua = navigator.userAgent;

  const handleMobileBlur = useCallback(() => {
    setFocused(false);
    setPrevViewport(visualViewport.height);
    isAndroid && setEditorContainerClass("editorContainer");
    if (isAndroid && prevViewport > visualViewport.height) {
      setEditorContainerClass("editorContainerKeyboard");
      handleEditorClass("editorContainerKeyboard");
      setFocused(true);
    } else if (isAndroid && prevViewport === 0) {
      handleClick();
      setEditorContainerClass("editorContainerKeyboard");
      handleEditorClass("editorContainerKeyboard");
    } else if (isAndroid && !isIOS) {
      setEditorContainerClass("editorContainer");
      handleEditorClass("editorContainer");
    } else if (isIOS) {
      setEditorContainerClass("editorContainerKeyboardIos");
      handleEditorClass("editorContainerKeyboardIos");
    } else {
      return;
    }
  });

  useEffect(() => {
    visualViewport.addEventListener("resize", handleMobileBlur);
    return () => {
      visualViewport.removeEventListener("resize", handleMobileBlur);
    };
  }, [handleMobileBlur]);

  const handleClick = () => {
    const end = refEditor.current.value.length;
    console.log("handleClick ran!", end);
    if (placeHolder) {
      handlePlaceHolder(false);
      toggleDesktopShareSheet(false);
    }
    setFocused(true);
    refEditor.current.focus();
    console.log('refEditor.current: ', refEditor.current);
  };

  const handleChange = (event) => {
    if (!hasText && event.target.value.length > 0) {
      handleTextDetection(true)
    } else if (hasText && event.target.value.length <= 0) {
      handleTextDetection(false);
    }
    changeEditor(event.target.value);
  };

  const handleMobileFocus = () => {
    isAndroid && setEditorContainerClass("editorContainerKeyboard");
  };

  return (
    <div className={editorContainerClass} onClick={handleClick}>
      <textarea
        id="editor"
        tabIndex={-1}
        onChange={handleChange}
        ref={refEditor}
        onFocus={handleMobileFocus}
        placeHolder={`Type Something`}
        onBlur={handleMobileBlur}
        autoFocus={true}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
  fabIcon: state.fab.fabIcon,
  isMobile: state.placeHolder.isMobile,
  hasText: state.textEditor.hasText,
});

export default connect(mapStateToProps, {
  changeEditor,
  handleEditorClass,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  handleTextDetection,
  toggleDesktopShareSheet,
})(TextEditor);
