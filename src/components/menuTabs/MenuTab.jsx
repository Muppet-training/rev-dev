import React, { Component } from 'react';
import TabItem from '../../components/menuTabs/TabItem';

class MenuTab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const tabItems = [
			{ itemName: 'Details' },
			{ itemName: 'Ingredients' },
			{ itemName: 'Results' }
		];

		return (
			<div className="menutab">
				<section>
					<h4>Overview</h4>
				</section>
				<section>
					<h4>Recipe</h4>
					<TabItem tabItems={tabItems} />
				</section>
				<section>
					<h4>Ingredients</h4>
				</section>
				<section>
					<h4>Staff</h4>
				</section>
				<section>
					<h4>Fixed Costs</h4>
				</section>
				<section>
					<h4>Packaging</h4>
				</section>
				<section>
					<h4>Account</h4>
				</section>
			</div>
		);
	}
}

export default MenuTab;
