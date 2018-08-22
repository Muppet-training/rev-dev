import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopBar from './containers/menus/TopBar';

import SignUp from './containers/screens/public/SignUp';

import './css/style.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<TopBar />
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={SignUp} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
