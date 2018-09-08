import { UPDATE_FIREBASE_USER_ACTION_TYPE } from '../actions/updateFirebaseUserAction';
import { UPDATE_FIREBASE_AUTH_ACTION_TYPE } from '../actions/updateFirebaseAuthAction';
import { UPDATE_FIREBASE_DATABASE_USER_DATA_SNAPSHOT_ACTION_TYPE } from '../actions/updateFirebaseDatabaseUserDataSnapshotAction';
import { UPDATE_FIREBASE_DATABASE_INGREDIENTS_DATA_SNAPSHOT_ACTION_TYPE } from '../actions/updateFirebaseDatabaseIngredientsDataSnapshotAction';
import { UPDATE_FIREBASE_DATABASE_SUPPLIERS_DATA_SNAPSHOT_ACTION_TYPE } from '../actions/updateFirebaseDatabaseSuppliersDataSnapshotAction';

const initialState = {
    user: undefined,
    auth: undefined,
    databaseUserDataSnapshot: undefined,
    databaseIngredientsDataSnapshot: undefined,
    databaseSuppliersDataSnapshot: undefined
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
        case UPDATE_FIREBASE_DATABASE_USER_DATA_SNAPSHOT_ACTION_TYPE:
            return {
                ...state,
                databaseUserDataSnapshot: action.payload
            };
        case UPDATE_FIREBASE_DATABASE_INGREDIENTS_DATA_SNAPSHOT_ACTION_TYPE:
            return {
                ...state,
                databaseIngredientsDataSnapshot: action.payload
            };
        case UPDATE_FIREBASE_DATABASE_SUPPLIERS_DATA_SNAPSHOT_ACTION_TYPE:
            return {
                ...state,
                databaseSuppliersDataSnapshot: action.payload
            };
        default:
            return state
    }
};

export default firebaseReducer;