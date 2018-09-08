import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { updateFirebaseAuthAction } from './actions/updateFirebaseAuthAction';
import { updateFirebaseUserAction } from './actions/updateFirebaseUserAction';
import { updateFirebaseDatabaseAction } from './actions/updateFirebaseDatabaseAction';

import TopBar from './containers/menus/TopBar';
import LeftBar from './containers/menus/LeftBar';

import Dashboard from './containers/screens/private/dashboard/Dashboard';
import EditRecipe from './containers/screens/private/recipe/EditRecipe';

import Login from './containers/screens/public/Login';

import './css/style.css';

const firebaseConfig = {
  apiKey: "AIzaSyA7gbMLG3JMchWV_0khRpOZQ280xxB6cbY",
  authDomain: "recipe-revenue-calc.firebaseapp.com",
  databaseURL: "https://recipe-revenue-calc.firebaseio.com",
  projectId: "recipe-revenue-calc",
  storageBucket: "recipe-revenue-calc.appspot.com",
  messagingSenderId: "1064966341760"
};

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.props.updateFirebaseDatabaseAction(firebase.auth());

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
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.updateFirebaseUserAction(user);
        this.props.updateFirebaseDatabaseAction(firebase.database());
        this.props.updateFirebaseAuthAction(firebase.auth());
      } else {
        this.props.updateFirebaseUserAction(undefined);
      }
    });

  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { toggleMenu } = this.state;

    return (
      <div
        id="app"
        className={
          this.props.firebaseReducer.user == false ? (
            'app'
          ) : toggleMenu == true ? (
            'userapp menu'
          ) : (
                '' + 'userapp'
              )
        }
      >
        {this.props.firebaseReducer.user != undefined && <TopBar menuToggleClick={this.menuToggleClick} />}
        {this.props.firebaseReducer.user != undefined && <LeftBar />}
        <div className="screens">
          <BrowserRouter>
            {this.props.firebaseReducer.user != undefined ? (
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
              </Switch>
            ) : (
                <Login />
              )}
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateFirebaseUserAction: (user) => dispatch(updateFirebaseUserAction(user)),
  updateFirebaseDatabaseAction: (database) => dispatch(updateFirebaseDatabaseAction(database)),
  updateFirebaseAuthAction: (auth) => dispatch(updateFirebaseAuthAction(auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

