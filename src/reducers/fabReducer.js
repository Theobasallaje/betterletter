import {  } from '../actions/types';

const INTIAL_STATE = {
  
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SOMETHING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
