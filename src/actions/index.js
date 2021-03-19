import {
  EDITOR_CHANGE,
  // EDITOR_CREATE,
  EDITOR_REF,
  EDITOR_FOCUS,
  FAB_ICON,
  IS_MOBILE,
  IS_IOS,
  PLACE_HOLDER_SHOW,
  SHARE_BUTTON_SHOW,
  VIEW_PORT_HIEGHT,
} from "./types";

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

export const detectIOS = (isIOS) => {
  return {
    type: IS_IOS,
    payload: isIOS,
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

export const changeEditor = (editorState) => async (dispatch, getState) => {
  console.log("editorState: ", editorState);
  dispatch({ type: EDITOR_CHANGE, payload: { editorState } });
};

export const checkFocus = (isFocused) => { 
  console.log('isFocused from checkFocus: ', isFocused);
  return {
    type: EDITOR_FOCUS, 
    payload: isFocused,
  };
};

// End of Editor actions

// Home actions

export const setViewportHieght = (hieght) => { 
  console.log('hieght from setViewportHieght: ', hieght);
  return {
    type: VIEW_PORT_HIEGHT, 
    payload: hieght,
  };
};

// End of Home actions
