import { combineReducers } from "redux";
import placeHolderReducer from './placeHolderReducer'
import fabReducer from './fabReducer';

export default combineReducers({
    placeHolder: placeHolderReducer,
    fab: fabReducer,
});
