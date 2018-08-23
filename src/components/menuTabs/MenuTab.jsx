import React, { Component } from 'react';
import TabItem from '../../components/menuTabs/TabItem';

class MenuTab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const recipeItems = [
			{ itemName: 'Details' },
			{ itemName: 'Ingredients' },
			{ itemName: 'Results' }
		];
		const ingredientItems = [ { itemName: 'Update Ingredient' } ];
		const staffItems = [ { itemName: 'Update Staff' } ];
		const packagingItems = [ { itemName: 'Update Packaging' } ];
		const accountItems = [
			{ itemName: 'Payment Details' },
			{ itemName: 'Update Profile' }
		];

		return (
			<div className="menutab">
				<section>
					<h4>Overview</h4>
				</section>
				<section>
					<h4>Recipe</h4>
					<TabItem tabItems={recipeItems} />
				</section>
				<section>
					<h4>Ingredients</h4>
					<TabItem tabItems={ingredientItems} />
				</section>
				<section>
					<h4>Staff</h4>
					<TabItem tabItems={staffItems} />
				</section>
				<section>
					<h4>Fixed Costs</h4>
				</section>
				<section>
					<h4>Packaging</h4>
					<TabItem tabItems={packagingItems} />
				</section>
				<section>
					<h4>Account</h4>
					<TabItem tabItems={accountItems} />
				</section>
			</div>
		);
	}
}

export default MenuTab;
