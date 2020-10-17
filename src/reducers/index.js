import { combineReducers } from "redux";
import textEditorReducer from './textEditorReducer';
import placeHolderReducer from './placeHolderReducer'
import fabReducer from './fabReducer';

export default combineReducers({
    textEditor: textEditorReducer,
    placeHolder: placeHolderReducer,
    fab: fabReducer,
});
