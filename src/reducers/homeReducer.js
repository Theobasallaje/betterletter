import { VIEW_PORT_HIEGHT, KEY_PRESSED } from "../actions/types";

const INTIAL_STATE = {
  visualViewport: null,
  keyPressed: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_PORT_HIEGHT:
      return { ...state, visualViewport: action.payload };
    case KEY_PRESSED:
      return { ...state, keyPressed: action.payload };
    default:
      return state;
  }
};
