import {combineReducers} from 'redux';
import authentification from './authentification';
import contacts from './contacts';
import applicationView from './applicationView';


export const rootReducer = combineReducers({
    loginInfo: authentification,
    contacts: contacts,
    applicationView: applicationView,
});