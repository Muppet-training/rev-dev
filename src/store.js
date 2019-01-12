import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {
	reactReduxFirebase,
	firebaseReducer
} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//Reducers
// @todo

const firebaseConfig = {
	apiKey: 'AIzaSyD8ejI4tYfVihY5BvXwS-mq_lKAMucQS2Y',
	authDomain: 'reciperevenue-prototype.firebaseapp.com',
	databaseURL: 'https://reciperevenue-prototype.firebaseio.com',
	projectId: 'reciperevenue-prototype',
	storageBucket: 'reciperevenue-prototype.appspot.com',
	messagingSenderId: '934588454994'
};

// react-redux-firebase config
const rrfConfig = {
	userrofile: 'users',
	userFirestoreForProfile: true
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
	reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
	rootReducer,
	initialState,
	compose(
		reactReduxFirebase(firebase),
		window.REDUX_DEVTOOLS_EXTENSION__ &&
			window.REDUX_DEVTOOLS_EXTENSION__
	)
);

export default store;
