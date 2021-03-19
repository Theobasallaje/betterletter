import { VIEW_PORT_HIEGHT } from "../actions/types";

const INTIAL_STATE = {
  visualViewport: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_PORT_HIEGHT:
      return { ...state, visualViewport: action.payload };
    default:
      return state;
  }
};
