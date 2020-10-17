import { FAB_ICON } from '../actions/types';

const INTIAL_STATE = {
  fabIcon: 'info'
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FAB_ICON:
      return { ...state, fabIcon: action.payload };
    default:
      return state;
  }
};
