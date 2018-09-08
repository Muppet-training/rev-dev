export const UPDATE_FIREBASE_DATABASE_INGREDIENTS_DATA_SNAPSHOT_ACTION_TYPE = 'UPDATE_FIREBASE_DATABASE_INGREDIENTS_DATA_SNAPSHOT_ACTION_TYPE';

export const updateFirebaseDatabaseIngredientsDataSnapshotAction = (dataSnapshot) => dispatch => {
    dispatch({
        type: UPDATE_FIREBASE_DATABASE_INGREDIENTS_DATA_SNAPSHOT_ACTION_TYPE,
        payload: dataSnapshot
    });
}

