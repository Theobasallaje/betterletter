import { EDITOR_REF } from '../actions/types';

const INTIAL_STATE = {
    hasText: null,
    ref: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EDITOR_REF:
      return { ...state, ref: action.payload };
    default:
      return state;
  }
};
