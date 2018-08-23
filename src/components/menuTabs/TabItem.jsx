import React, { Component } from 'react';

class TabItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { tabItems } = this.props;
		const menuItems = tabItems.map((item) => {
			return <li key={item.itemName}>{item.itemName}</li>;
		});

		return (
			<div className="tabitem">
				<ul>{menuItems}</ul>
			</div>
		);
	}
}

export default TabItem;
