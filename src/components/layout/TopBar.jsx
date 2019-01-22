import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<ul>
					<li
						className="menu-toggle"
						onClick={this.props.menuToggleClick}
					>
						<i className="fas fa-bars" />
					</li>
					<li className="brand">Recipe Revenue</li>
					<li className="avatar">
						<span>
							<i className="fas fa-users" />
						</span>
					</li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// ...state
	console.log(state);

	return {};
};

export default connect(mapStateToProps)(TopBar);
