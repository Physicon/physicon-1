import {combineReducers} from 'redux';
import courses from './courses';


export const rootReducer = combineReducers({
    courses: courses,
});