import React, { Component } from 'react';
import { connect } from 'react-redux';

import icon from './icons/menu.svg';

class TopBar extends Component {
	constructor(props) {
		super(props);

		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		this.props.firebaseReducer.auth.signOut();
	}

	render() {
		return (
			<div className="topbar">
				<ul>
					<li
						className="menu-toggle"
						onClick={this.props.menuToggleClick}>
						<img src={icon} />
					</li>
					<li className="brand">Recipe Revenue</li>
					<li className="avatar">
						<span>u</span>
					</li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state
});

export default connect(mapStateToProps)(TopBar);
