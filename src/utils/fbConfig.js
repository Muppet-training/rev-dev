import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyD8ejI4tYfVihY5BvXwS-mq_lKAMucQS2Y',
	authDomain: 'reciperevenue-prototype.firebaseapp.com',
	databaseURL: 'https://reciperevenue-prototype.firebaseio.com',
	projectId: 'reciperevenue-prototype',
	storageBucket: 'reciperevenue-prototype.appspot.com',
	messagingSenderId: '934588454994'
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
