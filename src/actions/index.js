import { PLACE_HOLDER_SHOW, FAB_ICON, EDITOR_REF } from "./types";
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import { text } from "@fortawesome/fontawesome-svg-core";

// Placeholder actions
export const handlePlaceHolder = (placeHolderPresent) => {
  return {
    type: PLACE_HOLDER_SHOW,
    payload: placeHolderPresent,
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
// End of Fab actions

// Editor actions
export const handleEditorRef = (ref) => {
  return {
    type: EDITOR_REF,
    payload: ref,
  };
};
// End of Editor actions
