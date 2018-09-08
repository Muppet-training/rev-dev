export const UPDATE_FIREBASE_DATABASE_USER_DATA_SNAPSHOT_ACTION_TYPE = 'UPDATE_FIREBASE_DATABASE_USER_DATA_SNAPSHOT_ACTION_TYPE';

export const updateFirebaseDatabaseUserDataSnapshotAction = (dataSnapshot) => dispatch => {
    dispatch({
        type: UPDATE_FIREBASE_DATABASE_USER_DATA_SNAPSHOT_ACTION_TYPE,
        payload: dataSnapshot
    });
}

