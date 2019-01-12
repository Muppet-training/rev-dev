export const createRecipe = (recipe) => {
	// dispatch: Dispatches an actions to the reducer
	return (dispatch, getState) => {
		// Make async call to database

		// Then dispatch and continnue the action process
		dispatch({ type: 'CREATE_RECIPE', recipe: recipe });
	};
};
