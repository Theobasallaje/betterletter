import { FAB_ICON, SHARE_BUTTON_SHOW, SHARE_SHEET_SHOW_DESKTOP } from '../actions/types';

const INTIAL_STATE = {
  fabIcon: 'info',
  showShareButton: false,
  showDesktopShareSheet: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FAB_ICON:
      return { ...state, fabIcon: action.payload };
    case SHARE_BUTTON_SHOW:
      return { ...state, showShareButton: action.payload };
    case SHARE_SHEET_SHOW_DESKTOP:
      return { ...state, showDesktopShareSheet: action.payload };
    default:
      return state;
  }
};
