import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
			toggle: false
		};
	}

	menuToggleClick = () => {
		alert('You found me!');
		this.setState((state) => ({
			toggle: !state.toggle
		}));
	};

	render() {
		return (
			<div className={isUser === true ? 'userapp' : 'app'}>
				{isUser === true && (
					<TopBar menuToggleClick={menuToggleClick} />
				)}
				{isUser === true && <LeftBar />}
				<div className="screens">
					<BrowserRouter>
						<Switch>
							{isUser === true ? (
								<Route
									path="/"
									exact
									component={Dashboard}
								/>
							) : (
								<Route
									path="/"
									exact
									component={SignUp}
								/>
							)}
							<Route
								path="/edit-recipe"
								exact
								component={EditRecipe}
							/>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
