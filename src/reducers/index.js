import { combineReducers } from "redux";
import fabReducer from './fabReducer';
import homeReducer from './homeReducer';
import placeHolderReducer from './placeHolderReducer'
import textEditorReducer from './textEditorReducer';

export default combineReducers({
    fab: fabReducer,
    home: homeReducer,
    placeHolder: placeHolderReducer,
    textEditor: textEditorReducer,
});
