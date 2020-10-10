import {
    PLACE_HOLDER_SHOW
  } from "./types";
import { Editor, EditorState, convertToRaw, convertFromRaw, ContentState } from "draft-js";
import { text } from "@fortawesome/fontawesome-svg-core";

// Placeholder actions
export const handlePlaceHolder = placeHolderPresent => {
    return {
      type: PLACE_HOLDER_SHOW,
      payload: placeHolderPresent
    };
  };
// End of Placeholder actions