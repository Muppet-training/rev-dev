import { UPDATE_FIREBASE_USER_ACTION_TYPE } from '../actions/updateFirebaseUserAction';
import { UPDATE_FIREBASE_DATABASE_ACTION_TYPE } from '../actions/updateFirebaseDatabaseAction';
import { UPDATE_FIREBASE_AUTH_ACTION_TYPE } from '../actions/updateFirebaseAuthAction';

const initialState = {
    auth: undefined,
    user: undefined,
    database: undefined
};

const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIREBASE_AUTH_ACTION_TYPE:
            return {
                ...state,
                auth: action.payload
            };
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