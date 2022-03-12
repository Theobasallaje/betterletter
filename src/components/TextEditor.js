import React, { useEffect, useCallback, useRef, useState } from "react";
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
  const [prevViewport, setPrevViewport] = useState(0);
  const ua = navigator.userAgent;

  // const handleMobileBlur = () => {
  //   setFocused(false);
  //   setPrevViewport(visualViewport.height);
  //   isMobile && setEditorContainerClass("editorContainer");
  //   // refEditor.current.blur();
  //   // alert("BLUR!");
  //   // alert(`COMPARE ${prevViewport} ${visualViewport.height} ${prevViewport > visualViewport.height}`);
  //   if (prevViewport > visualViewport.height) {
  //     (ua.indexOf("like Mac OS X") > -1 ) && setEditorContainerClass("editorContainerKeyboard");
  //   } else if (prevViewport === 0) {
  //     handleClick();
  //     (ua.indexOf("like Mac OS X") > -1 ) && setEditorContainerClass("editorContainerKeyboard");
  //   } else {
  //     (ua.indexOf("like Mac OS X") > -1 ) && setEditorContainerClass("editorContainer");
  //   }
  // };
  const handleMobileBlur = useCallback(() => {
    setFocused(false);
    setPrevViewport(visualViewport.height);
    isMobile && setEditorContainerClass("editorContainer");
    if (isMobile && prevViewport > visualViewport.height) {
      setEditorContainerClass("editorContainerKeyboard");
    } else if (isMobile && prevViewport === 0) {
      handleClick();
      setEditorContainerClass("editorContainerKeyboard");
    } else {
      setEditorContainerClass("editorContainer");
    }
  });

  useEffect(() => {
    // if (ua.indexOf("like Mac OS X") > -1) { //? only targets ios
    //   setFocused(true);
    // }
    visualViewport.addEventListener('resize', handleMobileBlur);
    return () => {
      visualViewport.removeEventListener('resize', handleMobileBlur);
    };
  }, [handleMobileBlur]);

  const handleClick = () => {
    console.log("handleClick ran!");
    if (placeHolder) {
      setFocused(true);
      handlePlaceHolder(false);
      handleFabIcon("share");
      toggleDesktopShareSheet(false);
    }
    refEditor.current.focus();
  };

  const handleChange = (event) => {
    changeEditor(event.target.value);
  };

  const handleMobileFocus = () => {
    isMobile && setEditorContainerClass("editorContainerKeyboard");
  };

  return (
    <div className={editorContainerClass} onClick={handleClick}>
      <textarea
        tabIndex={-1}
        onChange={handleChange}
        ref={refEditor}
        onFocus={handleMobileFocus}
        placeHolder={`Type Something`}
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
