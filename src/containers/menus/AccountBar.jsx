import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountBar extends Component {
	constructor(props) {
		super(props);

		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		this.props.firebaseReducer.auth.signOut();
	}

	render() {
		return (
			<div className="accountbar">
				<button onClick={this.signOut}>Sign Out</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state
});

export default connect(mapStateToProps)(AccountBar);
