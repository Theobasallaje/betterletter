import { FAB_ICON, SHARE_BUTTON_SHOW } from '../actions/types';

const INTIAL_STATE = {
  fabIcon: 'info',
  showShareButton: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FAB_ICON:
      return { ...state, fabIcon: action.payload };
    case SHARE_BUTTON_SHOW:
      return { ...state, showShareButton: action.payload };
    default:
      return state;
  }
};
