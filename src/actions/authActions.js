export const login = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase;

		console.log('Auth', firebase.auth());

		firebase
			.auth()
			.signInWithEmailAndPassword(
				credentials.email,
				credentials.passowrd
			)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'LOGIN_ERROR' });
			});
	};
};
