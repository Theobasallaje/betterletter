import { PLACE_HOLDER_SHOW } from '../actions/types';

const INTIAL_STATE = {
  placeHolderShow: true,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case PLACE_HOLDER_SHOW:
      return { ...state, placeHolderShow: action.payload };
    default:
      return state;
  }
};
