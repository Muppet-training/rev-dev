import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Thunk enhances the store enabling us to return a function from the Actions
import { reduxFirestore, getFirestore } from 'redux-firestore';
import // reactReduxFirebase,
// getFirebase
'react-redux-firebase';
import fbConfig from './utils/fbConfig';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(
			// Adding firebase as a middleware to be accessed in the actions
			thunk.withExtraArgument({ fgetFirestore })
		),
		// reactReduxFirebase(fbConfig),
		reduxFirestore(fbConfig)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
