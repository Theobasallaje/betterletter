import { EDITOR_TEXT, EDITOR_WITHOUT_TEXT } from '../actions/types';

const INTIAL_STATE = {
    hasText: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EDITOR_TEXT:
      return { ...state, hasText: true };
    case EDITOR_WITHOUT_TEXT:
      return { ...state, hasText: false };
    default:
      return state;
  }
};
