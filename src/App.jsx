import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import styled from 'styled-components';

import TopBar from './containers/menus/TopBar';

import SignUp from './containers/screens/public/SignUp';

const Container = styled.div`
	margin: 0px;
	padding: 0px;
`;

class App extends Component {
	render() {
		return (
			<Container>
				<TopBar />
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={SignUp} />
					</Switch>
				</BrowserRouter>
			</Container>
		);
	}
}

export default App;
