import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopBar from './containers/menus/TopBar';
import LeftBar from './containers/menus/LeftBar';

import SignUp from './containers/screens/public/SignUp';

import './css/style.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<TopBar />
				<LeftBar />
				<div className="screens">
					<BrowserRouter>
						<Switch>
							<Route
								path="/"
								exact
								component={SignUp}
							/>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
