import React, { Component } from 'react';
import { connect } from 'react-redux';

import icon from './icons/menu.svg';

class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<ul>
					<li
						className="menu-toggle"
						onClick={this.props.menuToggleClick}
					>
						<img src={icon} alt="Toggle Icon" />
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
