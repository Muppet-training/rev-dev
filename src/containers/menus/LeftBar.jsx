import React, { Component } from 'react';

import MenuTab from '../../components/menuTabs/MenuTab';

class LeftBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="leftbar">
				<MenuTab />
			</div>
		);
	}
}

export default LeftBar;
