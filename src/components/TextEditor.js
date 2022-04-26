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
      handleEditorClass("editorContainerKeyboard");
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
    // placeHolder && handleClick();
    visualViewport.addEventListener("resize", handleMobileBlur);
    refEditor.current.addEventListener("keypress", (e) => { 
      refEditor.current.focus();
      console.log('keypress listener ran!', e.keyCode, e.key) 
    });
    return () => {
      visualViewport.removeEventListener("resize", handleMobileBlur);
      refEditor.current.removeEventListener("keypress", () => console.log('keypress listener ran!'));
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
    // refEditor.current.setSelectionRange(0, 0);
    // !move cursor back down after a set time out?
    refEditor.current.focus();
    console.log('refEditor.current: ', refEditor.current);
    // window.dispatchEvent(new KeyboardEvent('keypress', {
    //   'key': 'a'
    // }));
    refEditor.current.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'e',
      keyCode: 69,
    }));
    //! Do I need to pass the event as a payload to the reducer somehow?
    // document.getElementById("editor").dispatchEvent(
    //   new KeyboardEvent("keydown", {
    //     key: "e",
    //     keyCode: 69,
    //     code: "KeyE",
    //     which: 69,
    //     shiftKey: false,
    //     ctrlKey: false,
    //     metaKey: false,
    //   })
    // );
    //console.log(event);
    // refEditor.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'})); // 37
    // refEditor.current.dispatchEvent(new KeyboardEvent('keydown', {'key': 'left arrow'})); // 37
    // refEditor.current.dispatchEvent(new KeyboardEvent('keydown', {'key': 'right arrow'})); // 39
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }, 150);
  };

  const handleChange = (event) => {
    changeEditor(event.target.value); //! Do I need to do something with this for the keyboard event to change the editor
  };

  const handleMobileFocus = () => {
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    isMobile && setEditorContainerClass("editorContainerKeyboard");
  };

  return (
    <div className={editorContainerClass} onClick={handleClick}>
      <textarea
        id="editor"
        tabIndex={-1}
        onChange={handleChange}
        onKeyPress={(e) => console.log('event.target.value', e.target.value)}
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
