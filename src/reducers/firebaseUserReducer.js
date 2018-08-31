import { UPDATE_FIREBASE_USER_ACTION_TYPE } from '../actions/updateFirebaseUserAction';

const initialState = {
    firebaseUser: true
};

const firebaseUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIREBASE_USER_ACTION_TYPE:
            return {
                firebaseUser: action.payload
            }
        default:
            return state
    }
};

export default firebaseUserReducer;