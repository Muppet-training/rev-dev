import React, { Component } from 'react';
import AccountBar from '../../../menus/AccountBar';

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Dashboard <AccountBar />
			</div>
		);
	}
}

export default Dashboard;
