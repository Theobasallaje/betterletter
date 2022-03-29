import { EDITOR_CHANGE, EDITOR_CLASS, EDITOR_CREATE, EDITOR_REF } from "../actions/types";

const INTIAL_STATE = {
  editorState: "",
  editorClass: "editorContainer",
  hasText: null,
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
    default:
      return state;
  }
};
