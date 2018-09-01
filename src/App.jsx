import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateFirebaseUserAction } from './actions/updateFirebaseUserAction';

import TopBar from './containers/menus/TopBar';
import LeftBar from './containers/menus/LeftBar';

import SignUp from './containers/screens/public/SignUp';
import Dashboard from './containers/screens/private/dashboard/Dashboard';
import EditRecipe from './containers/screens/private/recipe/EditRecipe';

import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMenu: false
    };
  }

  menuToggleClick = () => {
    this.setState((state) => ({
      toggleMenu: !state.toggleMenu
    }));
  };

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
        {this.props.firebaseReducer.user == true && <TopBar menuToggleClick={this.menuToggleClick} />}
        {this.props.firebaseReducer.user == true && <LeftBar />}
        <div className="screens">
          <BrowserRouter>
            {this.props.firebaseReducer.user == true ? (
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
                <Switch>
                  <Route
                    path="/"
                    exact={true}
                    component={SignUp}
                  />
                </Switch>
              )}
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  updateFirebaseUserAction: () => dispatch(updateFirebaseUserAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

