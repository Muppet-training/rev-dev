import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopBar from './containers/menus/TopBar';
import LeftBar from './containers/menus/LeftBar';

import SignUp from './containers/screens/public/SignUp';
import Dashboard from './containers/screens/private/dashboard/Dashboard';

import './css/style.css';

const isUser = true;

class App extends Component {
	render() {
		return (
			<div className={isUser == true ? 'userapp' : 'app'}>
				{isUser == true && <TopBar />}
				{isUser == true && <LeftBar />}
				<div className="screens">
					<BrowserRouter>
						<Switch>
							{isUser == true ? (
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
								path="/details"
								exact
								component={details}
							/>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
