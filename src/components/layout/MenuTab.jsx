import React, { Component } from 'react';
import TabItem from './TabItem';

class MenuTab extends Component {
	render() {
		const recipeItems = [
			{ itemName: 'Details', url: '/edit-recipe' },
			{ itemName: 'Ingredients', url: '/edit-recipe' },
			{ itemName: 'Results', url: '/edit-recipe' }
		];
		const ingredientItems = [
			{ itemName: 'Edit Ingredient', url: '/edit-ingredient' }
		];
		const staffItems = [
			{ itemName: 'Edit Staff', url: '/edit-staff' }
		];
		const packagingItems = [
			{ itemName: 'Edit Packaging', url: '/edit-packaging' }
		];
		const accountItems = [
			{ itemName: 'Payment Details', url: '/payment-details' },
			{ itemName: 'Update Profile', url: '/update-profile' }
		];

		return (
			<div className="menutab">
				<section>
					<h4>Overview</h4>
				</section>
				<section>
					<h4>Recipes</h4>
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
