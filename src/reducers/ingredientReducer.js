const initState = {
	ingredients: [
		{
			name: 'Eggs',
			pCost: 4,
			pGrams: 700
		},
		{
			name: 'Flour',
			pCost: 15.62,
			pGrams: 10000
		},
		{
			name: 'Tomatos',
			pCost: 1.28,
			pGrams: 450
		}
	]
};

const ingredientReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_INGREDIENT':
			console.log('Created Ingredient', action.payload);
			return state;
		case 'CREATE_INGREDIENT_ERROR':
			console.log('Create Project Error', action.payload);
			return state;
		default:
			return state;
	}
};

export default ingredientReducer;
