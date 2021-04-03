import { EDITOR_CHANGE, EDITOR_CREATE, EDITOR_REF, EDITOR_FOCUS, MAKE_EDITOR_FOCUS } from "../actions/types";

const INTIAL_STATE = {
  editorState: "",
  hasText: null,
  ref: null,
  isFocused: false,
  makeFocused: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EDITOR_REF:
      return { ...state, ref: action.payload };
    case EDITOR_CREATE:
      return { ...state, editorState: action.payload.editorState };
    case EDITOR_CHANGE:
      return { ...state, editorState: action.payload.editorState };
    case EDITOR_FOCUS:
      return { ...state, isFocused: action.payload };
    case MAKE_EDITOR_FOCUS:
      return { ...state, makeFocused: action.payload };
    default:
      return state;
  }
};
