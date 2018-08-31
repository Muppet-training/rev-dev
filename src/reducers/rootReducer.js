import { combineReducers } from 'redux';

import firebaseUserReducer from './firebaseUserReducer';

export default combineReducers({
    firebaseUser: firebaseUserReducer
});