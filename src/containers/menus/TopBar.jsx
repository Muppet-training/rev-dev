import React, { Component } from 'react';

class TopBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topbar">
				<ul>
					<li>
						<div class="icon">
							<svg class="icon-1">
								<use href="icons.svg#menu" />
							</svg>
						</div>
					</li>
					<li>
						<p>Logo</p>
					</li>
					<li>
						<p>Logo</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default TopBar;
