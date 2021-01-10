import { EDITOR_REF, FAB_ICON, IS_MOBILE, PLACE_HOLDER_SHOW, SHARE_BUTTON_SHOW  } from "./types";
// import {
//   Editor,
//   EditorState,
//   convertToRaw,
//   convertFromRaw,
//   ContentState,
// } from "draft-js";

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
// End of Fab actions

// Editor actions
export const handleEditorRef = (ref) => {
  return {
    type: EDITOR_REF,
    payload: ref,
  };
};
// End of Editor actions
