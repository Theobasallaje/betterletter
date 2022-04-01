import React, { useEffect, useCallback, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  changeEditor,
  handleEditorClass,
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
  handleEditorClass,
  handlePlaceHolder,
  handleFabIcon,
  changeEditor,
  toggleDesktopShareSheet,
}) {
  let refEditor = useRef();
  const [editorContainerClass, setEditorContainerClass] =
    useState("editorContainer");
  const [focused, setFocused] = useState(false);
  const [prevViewport, setPrevViewport] = useState(0);

  const handleMobileBlur = useCallback(() => {
    setFocused(false);
    setPrevViewport(visualViewport.height);
    isMobile && setEditorContainerClass("editorContainer");
    if (isMobile && prevViewport > visualViewport.height) {
      setEditorContainerClass("editorContainerKeyboard");
      handleEditorClass("editorContainerKeyboard")
      setFocused(true);
    } else if (isMobile && prevViewport === 0) {
      handleClick();
      // setFocused(true);
      setEditorContainerClass("editorContainerKeyboard");
      handleEditorClass("editorContainerKeyboard");
    } else {
      setEditorContainerClass("editorContainer");
      handleEditorClass("editorContainer");
      // alert('Text Editor else!');
    }
  });

  useEffect(() => {
    placeHolder && handleClick();
    visualViewport.addEventListener('resize', handleMobileBlur);
    return () => {
      visualViewport.removeEventListener('resize', handleMobileBlur);
    };
  }, [handleMobileBlur]);

  const handleClick = () => {
    const end = refEditor.current.value.length;
    console.log("handleClick ran!", end);
    if (placeHolder) {
      handlePlaceHolder(false);
      handleFabIcon("share");
      toggleDesktopShareSheet(false);
    }
    setFocused(true);
    refEditor.current.setSelectionRange(0, 0);
    // !move cursor back down after a set time out?
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
        placeHolder={`Type Something ${focused} ${placeHolder} ${editorContainerClass}`}
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
});

export default connect(mapStateToProps, {
  changeEditor,
  handleEditorClass,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
  toggleDesktopShareSheet,
})(TextEditor);
