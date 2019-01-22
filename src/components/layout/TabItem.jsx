import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class TabItem extends Component {
	render() {
		const { tabItems } = this.props;
		const menuItems = tabItems.map((item) => {
			return (
				<li key={item.itemName}>
					<a href={item.url}>{item.itemName}</a>
				</li>
			);
		});

		return (
			<div className="tabitem">
				<ul>{menuItems}</ul>
			</div>
		);
	}
}

export default TabItem;
