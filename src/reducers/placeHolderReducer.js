import { IS_MOBILE, PLACE_HOLDER_SHOW } from '../actions/types';

const INTIAL_STATE = {
  placeHolderShow: true,
  isMobile: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case PLACE_HOLDER_SHOW:
      return { ...state, placeHolderShow: action.payload };

    case IS_MOBILE:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};
