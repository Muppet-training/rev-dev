const initState = {
	recipes: [
		{
			name: 'Appie Pie',
			profitPreServe: 6.12,
			salesPrice: 18.75,
			profitMargin: 0.23
		},
		{
			name: 'Burger',
			profitPreServe: 5.8,
			salesPrice: 13,
			profitMargin: 0.15
		},
		{
			name: 'Orange Cake',
			profitPreServe: 34,
			salesPrice: 120,
			profitMargin: 0.44
		},
		{
			name: 'Burrito',
			profitPreServe: 9.1,
			salesPrice: 21,
			profitMargin: 0.67
		}
	]
};

const recipeReducer = (state = initState, action) => {
	return state;
};

export default recipeReducer;
