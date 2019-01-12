import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountBar extends Component {
	render() {
		return (
			<div className="accountbar">
				{/* <button onClick={this.signOut}>Sign Out</button> */}
				"Account Bar"
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state
});

export default connect(mapStateToProps)(AccountBar);
