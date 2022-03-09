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
  const ua = navigator.userAgent;

  useEffect(() => {
    setPrevViewport(visualViewport.height);
    //! look into this condition
    if (editorContainerClass === 'editorContainerKeyboard') {
      handleClick();
    }
    console.log(refEditor);
    // if (ua.indexOf("like Mac OS X") > -1) {
    //   setFocused(true);
    // }
    //! make textarea smaller/bigger when viewport changes - ignore focus on load issue for now
    // alert('ios');
    alert(
      `USEFFECT viewport: ${visualViewport.height}, focus: ${focused}, prevViewport: ${prevViewport}`
    );
  }, [editorContainerClass, visualViewport.height]);

  const handleClick = () => {
    console.log("handleClick ran!");
    // alert('click')
    if (placeHolder) {
      setFocused(true);
      handlePlaceHolder(false);
      handleFabIcon("share");
      toggleDesktopShareSheet(false);
    }
    refEditor.current.focus();
    // alert(`HANDLE CLICK viewport: ${visualViewport.height}, focus: ${focused}, prevViewport: ${prevViewport}`);
  };

  const handleChange = (event) => {
    changeEditor(event.target.value);
  };

  const handleMobileFocus = () => {
    isMobile && setEditorContainerClass("editorContainerKeyboard");
  };

  const handleMobileBlur = () => {
    setFocused(false);
    isMobile && setEditorContainerClass("editorContainer");
    // refEditor.current.blur();
    alert("BLUR!");
  };

  const handleMouseLeave = () => {
    // refEditor.current.blur();
  };

  return (
    <div className={editorContainerClass} onClick={handleClick}>
      <textarea
        tabIndex={-1}
        onChange={handleChange}
        ref={refEditor}
        onFocus={handleMobileFocus}
        placeHolder={`${visualViewport.height} ${focused} ${prevViewport} ${editorContainerClass} ${refEditor.current}`}
        onBlur={handleMobileBlur}
        // onMouseLeave={handleMouseLeave}
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
