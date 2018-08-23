import React, { Component } from 'react';

class TopBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topbar">
				<ul>
					<li className="menu-toggle">x</li>
					<li className="brand">
						<p>Recipe Revenue</p>
					</li>
					<li className="avatar">u</li>
				</ul>
			</div>
		);
	}
}

export default TopBar;
