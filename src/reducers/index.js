import { combineReducers } from "redux";
import placeHolderReducer from './placeHolderReducer'

export default combineReducers({
    placeHolder: placeHolderReducer,
});
