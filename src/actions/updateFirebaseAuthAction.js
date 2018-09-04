export const UPDATE_FIREBASE_AUTH_ACTION_TYPE =  'UPDATE_FIREBASE_AUTH_ACTION_TYPE';

export const updateFirebaseAuthAction = (firebaseAuth) => dispatch => {
    dispatch({
     type: UPDATE_FIREBASE_AUTH_ACTION_TYPE,
     payload: firebaseAuth
    });
}

