import { FAB_ICON, IS_IOS, SHARE_BUTTON_SHOW } from "../actions/types";

const INTIAL_STATE = {
  fabIcon: "info",
  showShareButton: false,
  isIOS: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FAB_ICON:
      return { ...state, fabIcon: action.payload };
    case SHARE_BUTTON_SHOW:
      return { ...state, showShareButton: action.payload };
    case IS_IOS:
      return { ...state, isIOS: action.payload };
    default:
      return state;
  }
};
