import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer';
import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	ingredient: ingredientReducer,
	recipe: recipeReducer
});

export default rootReducer;
