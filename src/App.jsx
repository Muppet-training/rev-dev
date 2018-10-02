import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { updateFirebaseAuthAction } from './actions/updateFirebaseAuthAction';
import { updateFirebaseUserAction } from './actions/updateFirebaseUserAction';
import { updateFirebaseDatabaseUserDataSnapshotAction } from './actions/updateFirebaseDatabaseUserDataSnapshotAction';
import { updateFirebaseDatabaseIngredientsDataSnapshotAction } from './actions/updateFirebaseDatabaseIngredientsDataSnapshotAction';
import { updateFirebaseDatabaseSuppliersDataSnapshotAction } from './actions/updateFirebaseDatabaseSuppliersDataSnapshotAction';

import TopBar from './containers/menus/TopBar';
import LeftBar from './containers/menus/LeftBar';

import Dashboard from './containers/screens/private/dashboard/Dashboard';
import EditRecipe from './containers/screens/private/recipe/EditRecipe';
import ListRecipes from './containers/screens/private/recipe/ListRecipes';
import EditIngredient from './containers/screens/private/ingredient/EditIngredient';
import ListIngredients from './containers/screens/private/ingredient/ListIngredients';
import EditPackaging from './containers/screens/private/packaging/EditPackaging';
import ListPackaging from './containers/screens/private/packaging/ListPackaging';
import EditFixedCosts from './containers/screens/private/fixedCosts/EditFixedCosts';
import EditStaff from './containers/screens/private/staff/EditStaff';
import ListStaff from './containers/screens/private/staff/ListStaff';

import Login from './containers/screens/public/Login';
import MenuWidth from './utils/MenuWidth';
import NoMenuWidth from './utils/NoMenuWidth';

// import './css/style.css';

const firebaseConfig = {
	apiKey: 'AIzaSyA7gbMLG3JMchWV_0khRpOZQ280xxB6cbY',
	authDomain: 'recipe-revenue-calc.firebaseapp.com',
	databaseURL: 'https://recipe-revenue-calc.firebaseio.com',
	projectId: 'recipe-revenue-calc',
	storageBucket: 'recipe-revenue-calc.appspot.com',
	messagingSenderId: '1064966341760'
};

class App extends Component {
	constructor(props) {
		super(props);

		// Initialize firebase
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}

		this.state = {
			toggleMenu: false
		};
	}

	menuToggleClick = () => {
		this.setState((state) => ({
			toggleMenu: !state.toggleMenu
		}));
	};

	componentDidMount() {
		this.unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged((user) => {
				if (user) {
					// Initialize the redux state
					this.props.updateFirebaseUserAction(user);
					this.props.updateFirebaseAuthAction(
						firebase.auth()
					);

					// Initialize the database listeners
					var database = firebase.database();
					database
						.ref(
							'/users/' +
								firebase.auth().currentUser.uid
						)
						.on('value', (dataSnapshot) => {
							this.props.updateFirebaseDatabaseUserDataSnapshotAction(
								dataSnapshot
							);
						});
					database
						.ref('/ingredients/')
						.on('value', (dataSnapshot) => {
							this.props.updateFirebaseDatabaseIngredientsDataSnapshotAction(
								dataSnapshot
							);
						});
					database
						.ref('/suppliers/')
						.on('value', (dataSnapshot) => {
							this.props.updateFirebaseDatabaseSuppliersDataSnapshotAction(
								dataSnapshot
							);
						});
				} else {
					// Turn off the listerners and reset redux state
					firebase.database().ref().off();
					this.props.updateFirebaseUserAction(undefined);
					this.props.updateFirebaseAuthAction(undefined);
					this.props.updateFirebaseDatabaseUserDataSnapshotAction(
						undefined
					);
					this.props.updateFirebaseDatabaseIngredientsDataSnapshotAction(
						undefined
					);
					this.props.updateFirebaseDatabaseSuppliersDataSnapshotAction(
						undefined
					);
				}
			});
	}

	componentWillUnmount() {
		this.unregisterAuthObserver();
	}

	render() {
		const { toggleMenu } = this.state;

		return (
			<div id="app">
				<div
					id={toggleMenu == true ? 'menu' : 'no_menu'}
					{...(toggleMenu == true
						? MenuWidth()
						: NoMenuWidth())}
					className={
						this.props.firebaseReducer.user == false ? (
							'app'
						) : toggleMenu == true ? (
							'userapp menu'
						) : (
							'userapp'
						)
					}
				>
					{this.props.firebaseReducer.user !==
						undefined && (
						<TopBar
							menuToggleClick={this.menuToggleClick}
						/>
					)}
					{this.props.firebaseReducer.user !==
						undefined && <LeftBar />}
					<div className="screens">
						<BrowserRouter>
							{this.props.firebaseReducer.user !==
							undefined ? (
								<Switch>
									<Route
										path="/"
										exact={true}
										component={Dashboard}
									/>
									<Route
										path="/edit-recipe"
										exact
										component={EditRecipe}
									/>
									<Route
										path="/list-recipes"
										exact
										component={ListRecipes}
									/>
									<Route
										path="/edit-ingredient"
										exact
										component={EditIngredient}
									/>
									<Route
										path="/list-ingredients"
										exact
										component={ListIngredients}
									/>
									<Route
										path="/edit-packaging"
										exact
										component={EditPackaging}
									/>
									<Route
										path="/list-packaging"
										exact
										component={ListPackaging}
									/>
									<Route
										path="/fixed-costs"
										exact
										component={EditFixedCosts}
									/>
									<Route
										path="/update-staff"
										exact
										component={EditStaff}
									/>
									<Route
										path="/all-staff"
										exact
										component={ListStaff}
									/>
								</Switch>
							) : (
								<Login />
							)}
						</BrowserRouter>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
	updateFirebaseUserAction: (user) =>
		dispatch(updateFirebaseUserAction(user)),
	updateFirebaseAuthAction: (auth) =>
		dispatch(updateFirebaseAuthAction(auth)),
	updateFirebaseDatabaseUserDataSnapshotAction: (dataSnapshot) =>
		dispatch(
			updateFirebaseDatabaseUserDataSnapshotAction(dataSnapshot)
		),
	updateFirebaseDatabaseIngredientsDataSnapshotAction: (
		dataSnapshot
	) =>
		dispatch(
			updateFirebaseDatabaseIngredientsDataSnapshotAction(
				dataSnapshot
			)
		),
	updateFirebaseDatabaseSuppliersDataSnapshotAction: (
		dataSnapshot
	) =>
		dispatch(
			updateFirebaseDatabaseSuppliersDataSnapshotAction(
				dataSnapshot
			)
		)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
