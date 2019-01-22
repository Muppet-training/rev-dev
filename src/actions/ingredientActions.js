export const createIngredient = (ingredient) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// Make async call to database

		// This gives us a reference to firestore by invoking 'Calling the fucntion automatically' to firestore
		const firestore = getFirestore();

		// This give a reference tot eh ingredients collection
		firestore
			.collection('ingredients')
			.add({
				// this is the short hand method to do whats below
				...ingredient,
				userFirstName: 'Kalindi',
				userLastName: 'Ochoa',
				userID: 12345,
				createdAt: new Date()
			})
			.then(() => {
				// An action is able to stop the call to the database
				// Do something with the data
				// Then dispatch the action to the reducer
				dispatch({
					type: 'CREATE_INGREDIENT',
					payload: ingredient
				});
			})
			.catch((err) => {
				dispatch({
					type: 'CREATE_INGREDIENT_ERROR',
					payload: err
				});
			});
	};
};
