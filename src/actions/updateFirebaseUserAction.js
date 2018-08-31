export const UPDATE_FIREBASE_USER_ACTION_TYPE =  'UPDATE_FIREBASE_USER';

export const updateFirebaseUserAction = (firebaseUser) => dispatch => {
    dispatch({
     type: 'UPDATE_FIREBASE_USER',
     payload: firebaseUser
    });
}

