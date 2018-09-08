import React, { Component } from 'react';

class AccountBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="accountbar">
				<button onClick={this.signOut}>Sign Out</button>
			</div>
		);
	}
}

export default AccountBar;
