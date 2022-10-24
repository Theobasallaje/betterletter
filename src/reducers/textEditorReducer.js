import { EDITOR_CHANGE, EDITOR_CLASS, EDITOR_CREATE, EDITOR_REF, HAS_TEXT } from "../actions/types";

const INTIAL_STATE = {
  editorState: "",
  editorClass: "editorContainer",
  hasText: false,
  ref: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EDITOR_REF:
      return { ...state, ref: action.payload };
    case EDITOR_CREATE:
      return { ...state, editorState: action.payload.editorState };
    case EDITOR_CHANGE:
      return { ...state, editorState: action.payload.editorState };
    case EDITOR_CLASS:
      return { ...state, editorClass: action.payload };
    case HAS_TEXT:
      return { ...state, hasText: action.payload };
    default:
      return state;
  }
};
