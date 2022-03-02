import React, { useCallback, useEffect, useRef, useState } from "react";
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
  fabIcon,
  isMobile,
  handlePlaceHolder,
  handleFabIcon,
  changeEditor,
  toggleDesktopShareSheet,
}) {
  // console.log(props);
  let refEditor = useRef("editor");
  const [editorContainerClass, setEditorContainerClass] =
    useState("editorContainer");
  // const [height, setHeight] = useState(window.innerHeight);
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
    // set some sort of bool flag 
    // based on bool flag check in useEffect and if the hieght has changed do logic to resize text area.
    // does blur work on ios keyboard dismiss???

    // check if hieght has changed, if the same recall click function???
    //! why is textarea disapearing?
  };

  // const handleResize = () => {
  //   setHeight(window.innerHeight);
  // };

  // const handleKeyPressFocus = (event) => {
  //   handleClick();
  //   if (fabIcon === "shareSheetClose") {
  //     handleFabIcon("share");
  //     toggleDesktopShareSheet(false);
  //   }
  // };

  const handleChange = (event) => {
    changeEditor(event.target.value);
  };

  const handleMobileFocus = () => {
    isMobile && setEditorContainerClass("editorContainerKeyboard");
  };

  const handleMobileBlur = () => {
    // setFocused(false);
    // alert("BLUR!");
  };

  return (
    <div className={editorContainerClass} onClick={handleClick}>
      {/* <div className={editorContainerClass}> */}
      <textarea
        tabIndex={-1}
        onChange={handleChange}
        ref={refEditor}
        onFocus={handleMobileFocus}
        // placeHolder={`Type Something...`}
        // placeHolder={`${height} ${editorContainerClass} ${window.innerHeight}`}
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
