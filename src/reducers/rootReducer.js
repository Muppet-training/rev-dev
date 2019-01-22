import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer';
import recipeReducer from './recipeReducer';
// This will retrive the data from the database for us because we passed in the fbConfig in index.js
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	auth: authReducer,
	ingredient: ingredientReducer,
	recipe: recipeReducer
});

export default rootReducer;
