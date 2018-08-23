import React, { Component } from 'react';

class TabItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { tabItems } = this.props;

		const menuItems = tabItems.map((item) => {
			console.log(item);
			return <li>{item.itemName}</li>;
		});

		return (
			<div className="tabitem">
				<ul>{menuItems}</ul>
			</div>
		);
	}
}

export default TabItem;
