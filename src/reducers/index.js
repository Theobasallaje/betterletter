import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import textEditorReducer from './textEditorReducer';
import placeHolderReducer from './placeHolderReducer'
import fabReducer from './fabReducer';

export default combineReducers({
    home: homeReducer,
    textEditor: textEditorReducer,
    placeHolder: placeHolderReducer,
    fab: fabReducer,
});
