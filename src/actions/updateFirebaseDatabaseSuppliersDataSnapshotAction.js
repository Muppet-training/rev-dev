export const UPDATE_FIREBASE_DATABASE_SUPPLIERS_DATA_SNAPSHOT_ACTION_TYPE = 'UPDATE_FIREBASE_DATABASE_SUPPLIERS_DATA_SNAPSHOT_ACTION_TYPE';

export const updateFirebaseDatabaseSuppliersDataSnapshotAction = (dataSnapshot) => dispatch => {
    dispatch({
        type: UPDATE_FIREBASE_DATABASE_SUPPLIERS_DATA_SNAPSHOT_ACTION_TYPE,
        payload: dataSnapshot
    });
}

