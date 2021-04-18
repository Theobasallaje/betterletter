import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  createEditor,
  changeEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
} from "./../actions";
import { Editor } from "draft-js";
import "./TextEditor.scss";

// FIXME:
function TextEditor({
  createEditor,
  placeHolder,
  handlePlaceHolder,
  handleFabIcon,
  editorState,
  changeEditor,
}) {
  // console.log(props);
  let refEditor = useRef("editor");
  const hydrate = useCallback(() => {
    console.log("hydrate()");
    createEditor();
  }, [createEditor]);
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
  };

  return (
    <div className="RichEditor-root editorContainer" onClick={handleClick}>
      <div>
        {editorState ? (
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            onChange={changeEditor}
            ref={refEditor}
            spellCheck={true}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

const mapStateToProps = (state) => ({
  placeHolder: state.placeHolder.placeHolderShow,
  editorState: state.textEditor.editorState,
});

export default connect(mapStateToProps, {
  changeEditor,
  createEditor,
  handlePlaceHolder,
  handleFabIcon,
  handleEditorRef,
})(TextEditor);
