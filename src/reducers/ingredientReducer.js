const initState = {
	ingredients: [
		{
			name: 'Eggs',
			cost: 4,
			packetGrams: 700
		},
		{
			name: 'Flour',
			cost: 15.62,
			packetGrams: 10000
		},
		{
			name: 'Tomatos',
			cost: 1.28,
			packetGrams: 450
		}
	]
};

const ingredientReducer = (state = initState, action) => {
	return state;
};

export default ingredientReducer;
