import {
  EDITOR_CHANGE,
  // EDITOR_CREATE,
  EDITOR_CLASS,
  EDITOR_REF,
  FAB_ICON,
  IS_MOBILE,
  KEY_PRESSED,
  PLACE_HOLDER_SHOW,
  SHARE_BUTTON_SHOW,
  SHARE_SHEET_SHOW_DESKTOP,
} from "./types";

// Home actions
export const handleKeyPress = (keyPressed) => {
  return {
    type: KEY_PRESSED,
    payload: keyPressed,
  };
};

// Placeholder actions
export const handlePlaceHolder = (placeHolderPresent) => {
  return {
    type: PLACE_HOLDER_SHOW,
    payload: placeHolderPresent,
  };
};

export const detectMobile = (isMobile) => {
  return {
    type: IS_MOBILE,
    payload: isMobile,
  };
};
// End of Placeholder actions

// Fab actions
export const handleFabIcon = (icon) => {
  return {
    type: FAB_ICON,
    payload: icon,
  };
};

export const showShareButton = (shareButtonPresent) => {
  return {
    type: SHARE_BUTTON_SHOW,
    payload: shareButtonPresent,
  };
};

export const toggleDesktopShareSheet = (desktopShareSheet) => {
  return {
    type: SHARE_SHEET_SHOW_DESKTOP,
    payload: desktopShareSheet,
  };
};
// End of Fab actions

// Editor actions
export const handleEditorRef = (ref) => {
  return {
    type: EDITOR_REF,
    payload: ref,
  };
};

export const handleEditorClass = (editorClass) => {
  return {
    type: EDITOR_CLASS,
    payload: editorClass,
  };
};

// export const createEditor = (state) => async (dispatch, getState) => {
//   // let state = await getState();
//   console.log(state);
//   if (state) {
//     // let currentContent = editorState.textEditor.editorState.getCurrentContent().getPlainText();
//     let currentContent = state.textEditor.editorState.getCurrentContent().getPlainText();
//     console.log("Current Content: ", currentContent);
//     const contentState = convertFromRaw(currentContent);
//     let editorState = await EditorState.createWithContent(contentState);

//     dispatch({ type: EDITOR_CREATE, payload: { editorState } });
//   } else {
//     let editorState = await EditorState.createEmpty();
//     dispatch({ type: EDITOR_CREATE, payload: { editorState } });
//   }
// };

export const changeEditor = (editorState) => async (dispatch, getState) => {
  console.log("editorState: ", editorState);
  dispatch({ type: EDITOR_CHANGE, payload: { editorState } });
  
  // console.log('Get Plain Text editorState AFTER 2nd getState: ', state.textEditor.editorState.getCurrentContent().getPlainText())
};

// End of Editor actions
