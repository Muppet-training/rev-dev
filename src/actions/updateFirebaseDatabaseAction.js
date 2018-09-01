export const UPDATE_FIREBASE_DATABASE_ACTION_TYPE =  'UPDATE_FIREBASE_DATABASE_USER';

export const updateFirebaseDatabaseAction = (firebaseDatabase) => dispatch => {
    dispatch({
     type: UPDATE_FIREBASE_DATABASE_ACTION_TYPE,
     payload: firebaseDatabase
    });
}

