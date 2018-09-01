import { UPDATE_FIREBASE_USER_ACTION_TYPE } from '../actions/updateFirebaseUserAction';
import { UPDATE_FIREBASE_DATABASE_ACTION_TYPE } from '../actions/updateFirebaseDatabaseAction';

const initialState = {
    user: true,
    database: undefined
};

const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIREBASE_USER_ACTION_TYPE:
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_FIREBASE_DATABASE_ACTION_TYPE:
            return {
                ...state,
                database: action.payload
            };

        default:
            return state
    }
};

export default firebaseReducer;