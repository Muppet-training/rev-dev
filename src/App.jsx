import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as admin from 'firebase-admin';

import TopBar from './containers/menus/TopBar';
import LeftBar from './containers/menus/LeftBar';

import SignUp from './containers/screens/public/SignUp';
import Dashboard from './containers/screens/private/dashboard/Dashboard';
import EditRecipe from './containers/screens/private/recipe/EditRecipe';

import './css/style.css';

const isUser = true;

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
    console.log(toggleMenu);
    return (
      <div
        id="app"
        className={
          isUser === false ? (
            'app'
          ) : toggleMenu === true ? (
            'userapp menu'
          ) : (
                '' + 'userapp'
              )
        }
      >
        {isUser === true && <TopBar menuToggleClick={this.menuToggleClick} />}
        {isUser === true && <LeftBar />}
        <div className="screens">
          <BrowserRouter>
            {isUser === true ? (
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

export default App;
